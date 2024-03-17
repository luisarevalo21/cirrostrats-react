# Project README

## Running the Project

To run the project, follow the steps below:

### Backend

1. **Open Terminal:** You'll need to have 2 different terminals open.

2. **Running the Backend:**

   a. **Change Directory (CD):** Navigate into the `fast-api` directory.

   b. **Ensure Python Installation:** Make sure Python is installed on your machine.

   c. **Initialize Virtual Environment (venv):**

   ```bash
   python -m venv venv
   ```

   d. **Activate the Virtual Environment:**

   ```bash
   source venv/bin/activate
   ```

   e. **Install Required Packages:**

   ```bash
   pip install fastapi
   pip install 'uvicorn[standard]'
   ```

   f. **Run the Server:**

   ```bash
   uvicorn main:app --reload
   ```

   g. **Access the Project:** The project will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Frontend

3. **Running the Frontend:**

   a. **Change Directory (CD):** Navigate into the `frontend` directory.

   b. **Run Development Server:**

   ```bash
   npm run dev
   ```

   c. **Access the Frontend:** The frontend runs on [http://localhost:5173/](http://localhost:5173/).
