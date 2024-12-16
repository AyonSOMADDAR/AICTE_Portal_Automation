# Contributing to AICTE Approval System

## Welcome Contributors! 🌟

We appreciate your interest in contributing to the AICTE Approval System. This document provides guidelines to help you contribute effectively.

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all contributors. As such, we expect all participants to:

- Be respectful and considerate of others
- Be patient and understanding
- Provide constructive feedback
- Collaborate in a positive manner

## How to Contribute

### 1. Getting Started

1. Fork the repository
2. Clone your forked repository
3. Create a new branch for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

### 2. Development Setup

Before starting, ensure you have:
- Node.js (v16+)
- Python 3.8+
- Docker Desktop
- npm (v8+)

Install project dependencies:
```bash
# For Frontend
cd InstituteFrontend && npm install
cd ../admin && npm install

# For Mobile
cd ../mobile && npm install

# For Backend
cd ../backend && npm install

# For Python API
cd ../api && pip install -r requirements.txt
```

### 3. Coding Standards

#### Frontend (React & React Native)
- Follow React best practices
- Use functional components with hooks
- Implement prop-types for type checking
- Maintain consistent code formatting
- Use ESLint for code quality

#### Backend (Node.js & Python)
- Follow PEP 8 guidelines for Python
- Use consistent error handling
- Implement proper logging
- Write clean, modular code
- Add type hints in Python code

### 4. Commit Guidelines

- Use clear and descriptive commit messages
- Follow conventional commit format:
  ```
  <type>(<scope>): <description>
  
  Examples:
  - feat(frontend): add user authentication
  - fix(api): resolve document upload issue
  - docs(readme): update installation instructions
  ```

### 5. Pull Request Process

1. Ensure your code passes all existing tests
2. Add new tests for your changes
3. Update documentation if necessary
4. Submit a pull request with:
   - Clear title
   - Detailed description of changes
   - Reference any related issues

### 6. Code Review Process

- All submissions require review from at least one core team member
- Be open to feedback and suggested improvements
- Maintain a professional and constructive dialogue

### 7. Reporting Bugs

When reporting bugs, include:
- Detailed description
- Steps to reproduce
- Expected vs. actual behavior
- Environment details (OS, versions)

Use GitHub Issues and provide a clear, concise template:
```markdown
### Bug Description

### Steps to Reproduce
1. 
2. 
3. 

### Expected Result

### Actual Result

### Environment
- OS:
- Node.js Version:
- Browser/Platform:
```

### 8. Feature Requests

For feature requests:
- Check existing issues to avoid duplicates
- Provide clear use case and potential implementation details
- Be prepared to discuss and refine the proposal

### 9. Security Vulnerabilities

- Do NOT open public issues for security vulnerabilities
- Email security concerns to: [project-security-email]
- Include detailed information about the potential vulnerability

### 10. Recognition

Contributors will be recognized in:
- Project README
- Contribution Hall of Fame
- Potential future monetary or non-monetary rewards

## Questions?

If you have questions, please:
- Check the documentation first
- Ask in GitHub Discussions
- Join our project's communication channel

Happy Contributing! 🚀
