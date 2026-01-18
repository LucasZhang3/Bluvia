-- Create model_uploads table for tracking upload metadata
CREATE TABLE public.model_uploads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  upload_timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  columns_detected TEXT[],
  row_count INTEGER,
  validation_status TEXT CHECK (validation_status IN ('pending', 'valid', 'invalid', 'processing')) DEFAULT 'pending',
  validation_errors TEXT[],
  processing_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.model_uploads ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own uploads" 
ON public.model_uploads 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own uploads" 
ON public.model_uploads 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own uploads" 
ON public.model_uploads 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own uploads" 
ON public.model_uploads 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_model_uploads_updated_at
BEFORE UPDATE ON public.model_uploads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Update csv_data table to reference model_uploads
ALTER TABLE public.csv_data 
ADD COLUMN model_upload_id UUID REFERENCES public.model_uploads(id);

-- Create storage bucket for CSV uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types) 
VALUES (
  'model-uploads', 
  'model-uploads', 
  false, 
  5242880, -- 5MB limit
  ARRAY['text/csv', 'application/csv']
);

-- Create storage policies for model uploads
CREATE POLICY "Users can view their own uploaded files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'model-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'model-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'model-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'model-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);