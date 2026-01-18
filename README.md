
<div align="center">

  <img src="src/assets/logo.png" alt="Bluvia Logo" width="120" height="120">

  **Bluvia**

  [![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)

  <br />

  > **This repository is intentionally non-functional.**  

</div>

---

## Demo

<div align="center">

<table>
  <tr>
    <td align="center">
      <img width="1920" height="926" alt="Demo 1" src="https://github.com/user-attachments/assets/e5be635a-a6a6-4f7b-9a13-70be43e4762d" />
    </td>
    <td align="center">
      <img width="1891" height="910" alt="Demo 2" src="https://github.com/user-attachments/assets/bc743240-29fc-4cdc-9667-fd6d22fb6b32" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img width="1899" height="910" alt="Demo 3" src="https://github.com/user-attachments/assets/8c13a2c9-5e38-4237-9daa-c797b3260304" />
    </td>
    <td align="center">
      <img width="1913" height="916" alt="Demo 4" src="https://github.com/user-attachments/assets/2f3508c8-ac7c-4474-9ad4-7343955b09b4" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img width="1905" height="907" alt="Demo 5" src="https://github.com/user-attachments/assets/22cbe613-e262-4d08-9495-b1ac5154317f" />
    </td>
    <td align="center">
      <img width="1911" height="914" alt="Demo 6" src="https://github.com/user-attachments/assets/38c1cf01-1d31-47b2-a561-0f6c9fd52c47" />
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img width="1899" height="910" alt="Demo 7" src="https://github.com/user-attachments/assets/7d6bfc25-912f-4a84-acc6-6c9237c5e43d" />
    </td>
  </tr>
</table>

</div>

---

## Project Overview

### What This Project Originally Was

Bluvia was a water analysis application designed to visualize and predict metal concentrations in water systems. The application had both a map-based interface and a predictive model to analyze water in Arizona.

### Original Goals

- Display interactive maps with location-based water quality data
- Accept user-uploaded datasets for analysis
- Run predictive models on metal concentration levels
- Provide risk assessments based on calculated thresholds
- Support authenticated user sessions with personalized data views

### Current Status

This codebase was previously part of a **closed-source, private project** and has been open-sourced in a **redacted, non-functional state**.


## What Was Removed

### Proprietary Data
- Research datasets containing metal concentration measurements
- Geographic coordinate data tied to real locations
- Baseline reference data for predictive models

### Credentials & Secrets
- Google Maps API keys
- Database connection
- Authentication service
- Third-party API tokens

---

## Repository Structure

```
├── src/
│   ├── components/
│   │   ├── Auth/              # Authentication UI (non-functional)
│   │   ├── DataPanel/         # Data display (mock data)
│   │   ├── Layout/            # Application layout
│   │   ├── Map/               # Map integration (requires API key)
│   │   ├── Navigation/        # Navigation structure
│   │   ├── Search/            # Search interface (placeholder results)
│   │   ├── Tabs/              # Tab-based content
│   │   └── UI/                # Reusable UI primitives
│   ├── context/               # React Context state management
│   ├── hooks/                 # Custom React hooks
│   ├── services/              # API layer (mock data)
│   ├── integrations/          # External service patterns
│   ├── types/                 # TypeScript definitions
│   └── utils/                 # Utility functions
│
├── supabase/
│   └── functions/
│       ├── predict-metals/    # Prediction endpoint (stubbed)
│       ├── auth-login/        # Login endpoint (stubbed)
│       ├── auth-signup/       # Signup endpoint (stubbed)
│       ├── upload-csv/        # File upload (stubbed)
│       └── maps-proxy/        # Map tile proxy (stubbed)
│
└── public/                    # Static assets
```

---

## Making It Functional

To restore functionality, you would need to provide:

| Requirement | Description |
|-------------|-------------|
| Dataset | Geographic coordinates with metal concentration values |
| Scoring | Threshold values for risk calculations |
| Map API Key | Valid Google Maps API key |
| Database | Connection to a data persistence layer |
| Auth Provider | Configured authentication service |

**No real endpoints, keys, or datasets are provided in this repository.**
</div>
