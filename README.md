# AICTE Approval System - Saarthi

## Project Overview
Saarthi (Structured Advanced Real-time Tracking and Helping Intelligence) is an AI-driven approval system for AICTE applications, aimed at transforming the institutional approval process with transparency, efficiency, and intelligence.

## Architectural Plan
{}{}{}{}

## Repository Structure
```
aicte-approval-system/
│
├── InstituteFrontend/
│   ├── public/
|   |    ├── favicon.ico
|   |    ├── index.html
|   |    ├── logo192.png
|   |    ├── logo512.png
|   |    ├── manifest.json
|   |    └── robots.txt
│   └── src/
|        ├── Cont ext/
│        ├── assets/
|        ├── components/
|        ├── screens/
|        ├── App.css
|        ├── App.js
|        ├── index.css
|        └── index.js
|
├── admin/
│   ├── public/
|   |    ├── favicon.ico
|   |    ├── index.html
|   |    ├── logo192.png
|   |    ├── logo512.png
|   |    ├── manifest.json
|   |    └── robots.txt
│   └── src/
|        ├── Cont ext/
│        ├── assets/
|        ├── components/
|        ├── screens/
|        ├── App.css
|        ├── App.js
|        ├── index.css
|        └── index.js
│
├── api/
│   ├── Document/
│   │   └── AICTE Doc.pdf
│   ├── codefiles/
│   |   ├── AI_Validator.py
│   |   ├── Dimension.py 
│   |   ├── DocumentChat.py
│   |   ├── Prompts.py
│   |   ├── Scheduler.py
│   |   └── StatusChat.py
|   ├── faiss_index/
|   ├── uploads/ 
|   ├── app.py
|   ├── docker-compose.yaml
|   ├── Dockefile
|   └──  requirements.txt
|   
├── backend/
│   ├── documents/
|   ├── models/
│   |   ├── MoongooseConnection.js
│   |   ├── admin.js
│   |   ├── admindata.json
│   |   ├── aicte.admins.json
│   |   ├── applications.js
│   |   ├── docResult.js
│   |   ├── institute.js
│   |   ├── logs.js
│   |   └── superAdmin.js
|   ├── routes/
│   |   ├── adminapplications.js
│   |   ├── createApplication.js
│   |   ├── getData.js
│   |   ├── login.js
│   |   ├── newApplication.js
│   |   └── verifications.js
|   ├── uploads/
|   ├── utils
│   |   ├── saveDocResult.js
│   |   └──updateApplicationUploads.js
|   ├── package-lock.json
|   ├── package.json
│   └── server.js
│
├── mobile/
│   ├── app
│   |   ├── (tabs)
|   │   |   ├── _layout.tsx
|   │   |   ├── index.tsx
|   │   |   └── profile.tsx
│   |   ├── application/[id]
|   │   |   ├── Chat.jsx
|   │   |   ├── Status.jsx
|   │   |   └── _layout.jsx
|   |   ├── assets
|   │   |   ├── +not-found.tsx
|   │   |   ├── _layout.tsx
|   │   |   └── signIn.jsx
|   ├── assets/
│   |   ├── fonts
│   |   └── images
|   ├── components/
|   ├── constants/
|   ├── hooks/
│   |   ├── useColorScheme.ts
│   |   ├── useColorScheme.web.ts
│   |   └── useThemeColor.ts
|   ├── scripts/
│   |   ├── reset-project.js
|   ├── app.json
|   ├── package-lock.json
|   ├── package.json
│   └── tsconfig.json
│
└── README.md

```

## Key Features
- AI-based document verification
- Intelligent task scheduling
- Real-time application status tracking
- Comprehensive infrastructure compliance monitoring
- Secure authentication with facial recognition

## Technical Stack
- **Frontend**: React.js, React Native
- **Backend**: Node.js with Express, Python (FastAPI)
- **Database**: MongoDB, AWS S3
- **AI & Analytics**: TensorFlow, Large Language Models, NLP, Tesseract OCR
- **Security**: Role-Based Access Control, JWT, OpenCV

## Setup and Installation

### Prerequisites
- Node.js (v16+ recommended)
- Docker Desktop
- Python 3.8+
- npm (v8+)

### Frontend Installations

1. Institute Frontend Setup
```
# Navigate to institute frontend directory
cd InstituteFrontend

# Install dependencies
npm install

# Start development server
npm start
```
2. Admin Frontend Setup
```
# Navigate to admin frontend directory
cd admin

# Install dependencies
npm install

# Start development server
npm start
```
3. Mobile Setup
```
# Navigate to mobile app directory
cd mobile

# Install dependencies
npm install

# Start Metro bundler (for React Native)
npm start
```
4. Backend Setup
```
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm start
``` 
5. Python API Setup
```
# Navigate to api directory
cd api
```
Setup the enviornment file
Add the following in a .env file
```
# Groq Configuration API Key
GROQ_API_KEY= 'add your key here'

# Google Configuration API Key
GOOGLE_API_KEY= 'add your key here'

# Google Vision Configuration API Key
GOOGLE_APPLICATION_CREDENTIALS= 'add path to your vision secret jey json file'

# MongoDB Configuration API Key
MONGO_URI= 'add your key here'
```
Now start the docker Daemon and run 
```
docker compose up --build
```

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under [Specify License] - see the LICENSE file for details.

## Future Enhancements
- Enhanced security with TLS Encryption, WAF
- Improved AI validation using NER and AI modeling
- Microservice architecture development
- Expanded data storage and management capabilities
```





















































