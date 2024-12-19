# Contributing to KisanSetu

Thank you for considering contributing to **KisanSetu**! By contributing, you’re helping to create a robust and innovative platform that connects farmers and buyers effectively. This document outlines the process and guidelines for contributing to the project.

---

## How Can You Contribute?

### 1. Reporting Issues
If you encounter any bugs, have feature suggestions, or want to report inconsistencies:
- **Check existing issues** to avoid duplicates.
- If the issue hasn’t been reported, create a new one.
  - Use clear and concise language.
  - Include steps to reproduce (if applicable).
  - Add screenshots or logs to help us understand better.

### 2. Proposing New Features
Have an idea to enhance KisanSetu?
- Open a new issue and select the “Feature Request” template.
- Explain the feature, its benefits, and how it aligns with the platform’s goals.

### 3. Code Contributions
You can contribute by fixing bugs, implementing features, or improving documentation. Follow these steps:

#### Fork and Clone the Repository
```bash
# Fork the repository on GitHub and clone it locally
$ git clone https://github.com/<your-username>/kisansetu.git
$ cd kisansetu
```

#### Set Up Your Development Environment
1. Ensure you have the prerequisites installed:
   - Node.js and npm
   - Truffle framework
   - Ganache CLI
   - Firebase project setup
   - Docker (for containerized development)

2. Install dependencies:
```bash
$ npm install
```

3. Start Ganache for local blockchain testing:
```bash
$ ganache-cli
```

4. Run the development server:
```bash
$ npm start
```

5. Access the application at [http://localhost:5000](http://localhost:5000).

#### Work on Your Changes
1. Create a new branch:
```bash
$ git checkout -b feature/<YourFeature>
```

2. Make your changes, keeping the following in mind:
   - Follow the code style used in the project.
   - Write clear, concise, and modular code.
   - Include comments where necessary.

3. Test your changes:
```bash
$ truffle test --config truffle-config.cjs
```

#### Commit and Push
```bash
$ git add .
$ git commit -m "Add <description of your change>"
$ git push origin feature/<YourFeature>
```

#### Create a Pull Request
1. Navigate to your fork on GitHub.
2. Click the **Pull Request** button.
3. Ensure your branch is up-to-date with the main branch before submitting.
4. Add a clear title and description for your pull request.

---

## Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Project Structure
Familiarize yourself with the project’s structure:
- **Frontend:**
  - HTML, CSS, JavaScript
- **Backend:**
  - Firebase (Authentication and Firestore)
- **Blockchain:**
  - Ethereum smart contracts (Solidity)
- **Docker:**
  - Containerized deployment

---

## Testing Guidelines
Ensure your changes don’t break existing functionality by writing and running tests:
- **Unit Tests:** For individual components and smart contracts.
- **Integration Tests:** To verify end-to-end workflows.

Run all tests before submitting a pull request:
```bash
$ npm test
$ truffle test --config truffle-config.cjs
```

---

## Community Support
Feel free to ask questions or seek help by opening a discussion on the GitHub repository or joining the project’s communication channels (if available).

---

## Licensing
This project is licensed under the [MIT License](LICENSE).

---

Thank you for contributing to **KisanSetu**! Together, we can make a meaningful impact on the agricultural sector.

