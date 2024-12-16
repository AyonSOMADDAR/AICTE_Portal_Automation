# AICTE Approval System

## 🚀 Project Overview
An AI-driven system to transform the AICTE institutional approval process, developed by Team 9POINTERS to address critical challenges in institutional submissions and evaluations.

## 📌 Problem Statement
The current AICTE approval process suffers from multiple inefficiencies:
- Delays in manual validation of institutional submissions
- Inefficient document verification
- Inequitable evaluator allocation
- Limited infrastructure compliance validation
- Poor communication and transparency

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

## Architectural Plan
For a detailed architectural overview, please refer to our Architectural Plan
![Project Architecture Diagram](Diagrams/SIH.gif)

Also , here is a detailed Point Of View with respect to the Admin Members and New Institutes
[Admin POV](Diagrams/AdminPOV.gif) | [New Institute POV](Diagrams/NewInstitutePOV.gif)


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

  # Setup the enviornment file
  # Add the following in  .env file

    # Groq Configuration API Key
      GROQ_API_KEY= 'add your key here'
  
    # Google Configuration API Key
      GOOGLE_API_KEY= 'add your key here'
    
    # Google Vision Configuration API Key
      GOOGLE_APPLICATION_CREDENTIALS= 'add path to your vision secret jey json file'
    
    # MongoDB Configuration API Key
      MONGO_URI= 'add your key here'
  

  # Now start the docker Daemon and run 
  docker compose up --build
  ```

## Our Team
![](Diagrams/Team-9Pointers.jpeg)
[Aftaab | Harsh | Ayon | Gaurav | Ayush | Anushka](Diagrams/Team-9Pointers.jpeg)

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## Future Enhancements
- Enhanced security with TLS Encryption, WAF
- Improved AI validation using NER and AI modeling
- Microservice architecture development
- Expanded data storage and management capabilities

