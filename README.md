# TANAW: The Album of Now and Wonders

## Table of Contents
- [Project Overview](#project-overview)
- [System Architecture](#system-architecture)
- [Algorithm Used](#algorithm-used)
- [Security Mechanisms](#security-mechanisms)
- [Development Process and Design Decisions](#development-process)
- [Correctness and Efficiency](#correctness-and-efficiency)
- [How to Run the Project](#how-to-run)
- [Contributors](#contributors)
- [Acknowledgement](#acknoledgement)

---

## Project Overview
**TANAW** is a community-driven social web app designed to promote engagement with the United Nations' Sustainable Development Goals (SDGs). The platform allows users to share photos centered around occasional SDG themes, fostering awareness and collaboration. It incorporates features such as SDG tagging, media sharing, and administrative tools for managing events and institutions.

### Key Features
1. **Photo Sharing and SDG Tagging**: Upload and categorize photos related to specific SDGs, fostering global awareness.
2. **Customizable Avatars**: Personalize profiles with dynamic avatars using real-time facial detection.
3. **Search and Filters**: Explore SDG-related institutions and events through advanced search tools.
4. **Responsive Design**: Fully responsive UI for usability across devices.

### Future Plans
- **Admin Page**: A robust admin page for event creation and user management is planned for future versions.
- **Scalability**: While this initial version primarily targets the audience of Batangas State University - Alangilan Campus, the app is designed to scale for use by multiple institutions and colleges. This version uses predefined events and institutions due to time constraints, but rest assured that the system is equipped to support multiple institutions and custom events, ensuring adaptability for broader audiences.
---

## System Architecture

### 1. Presentation Layer (Frontend)
- **Technology Stack**: React.js, HTML5, CSS3, Tailwind CSS
- **Key Components**:
  - Responsive UI for onboarding, photo uploads, and user profiles.
  - Interactive features like CSS animations and real-time avatar mirroring.
  - Search and filter UI for SDG themes, institutions, and events.

### 2. Application Layer (Backend)
- **Technology Stack**: Next.js, Supabase API
- **Key Features**:
  - Secure email-based login and access control.
  - CRUD operations for albums, photos, and metadata.
  - Real-time avatar adaptation using facial detection.

### 3. Data Layer
- **Database**: Supabase (PostgreSQL-based)
- **Schema Design**:
  - Users: Stores user profiles and customizable avatar data.
  - Albums: Contains photo metadata, tags, and SDG associations.
  - Institutions and Events: Organizes SDG-partnered entities and events.

---

## Algorithm Used

### 1. Real-time Facial Detection
- **Used in**: Avatar Customization
- **Steps**:
  1. Capture video or photo input.
  2. Detect key facial landmarks (eyes, mouth, eyebrows).
  3. Map detected points to dynamic avatar features.
  4. Render real-time changes on the frontend.

### 2. Keyword Matching and Tagging
- **Used in**: Photo Categorization
- **Steps**:
  1. Extract user-entered tags during photo upload.
  2. Match keywords against predefined SDG themes.
  3. Store categorized data for retrieval and filtering.

### 3. SQL Queries with Indexing
- **Used in**: Search and Filter Mechanism.
- **Steps**:
  1. Accept search input and filter criteria (e.g., SDG tags).
  2. Construct a SQL query with WHERE clauses.
  3. Return paginated results to the user.

### 4. RESTful API Methods (GET, POST, PUT, DELETE).
- **Used in**: CRUD Operations
- **Steps**:
  - Perform database operations using Supabase methods for managing albums, photos, and user data.

---

## Security Mechanisms
1. **Authentication**:
   - Email-based authentication with Supabase.
2. **Input Validation**:
   - Frontend and backend validation to prevent SQL injection and XSS.
   - Sanitization of tags and filenames during uploads.
3. **Data Encryption**:
   - HTTPS for secure communication.
   - Encryption of sensitive data in transit and at rest.

---

## Development Process and Design Decisions
- **Agile Methodology**:
  - Weekly sprints with clear milestones.
  - Regular reviews for feedback and scope adjustments.
- **Technology Stack**:
  - **Supabase**: Real-time capabilities and Next.js integration.
  - **React & Tailwind CSS**: Responsive and visually appealing UI design.
- **User-Centric Design**:
    - Focused on usability and accessibility for diverse audiences.
- **Scalability**:
  - Modular backend to support growing user data and traffic.

---

## Correctness and Efficiency
1. **Correctness**:
   - Data Integrity: Supabase ensures atomic CRUD operations.
   - Input Validation: Strict validation for tags, filenames, and other inputs.
   - Functional Testing: Extensive tests ensure feature reliability.
2. **Efficiency**:
   - Frontend Optimization: Minimized CSS for faster load times.
   - Database Indexing: Improves query performance.
   - Lazy Loading: Reduces initial load time for heavy content.
   - CDN Integration: Low-latency content delivery.

---

## How to Run the Project
1. Clone the repository and navigate to the project directory.
   ```bash
    git clone https://github.com/your-repo/tanaw.git
    cd tanaw
    ```
2. Install dependencies:
   ```bash
   npm install
    ```
3. Start the development server:
   ```bash
   npm run dev
    ```
4. Open http://localhost:3000 in your browser to see the app.
You can start editing by modifying app/page.tsx. The page auto-updates as you edit.

---

## Contributors

- Frontend Developer: **Paul Oliver Cruz**
- Frontend Developer: **Jon Endrick Babao**
- Backend Developer: **Hersey Anne Odasco**
- Project Manager/ Fullstack Developer: **Danielle Ziac Abril**

- Course Facilitator: **Fatima Marie Agdon, MSCS**

---

## Acknowledgement

We would like to express our heartfelt gratitude to everyone who contributed to the successful completion of this project:

1. Instructor/Advisor.
We extend our deepest appreciation to **Ms. Fatima Marie P. Agdon, MSCS,** for her invaluable insights, constructive feedback, and unwavering support.
2. Team Members.
We are grateful to our team members for their dedication, collaboration, and hard work.
- **Paul Oliver Cruz** for his creativity and diligence in developing the frontend.
- **Jon Endrick Babao** for his precision and commitment to enhancing responsiveness of the frontend design.  
- **Hersey Anne Odasco** for her technical expertise and commitment to the backend development.
- **Danielle Ziac Abril** for leading the team as Project Manager while contributing as a full-stack developer.
3. University and Department.
We would like to thank **Batangas State University,** particularly the **College of Information and Computing Sciences (CICS),** for providing us with the resources and a platform to apply our knowledge and skills.
4. External Tools and Resources.
Special thanks to the developers and communities behind the tools and platforms we utilized, such as **Supabase, React, Tailwind CSS, and Next.js,** which empowered us to create a robust and user-friendly web application.
5. United Nations SDG Framework and Related Resources.
Finally, we are grateful for the **United Nations SDG framework,** for inspiring the central theme of our project.
