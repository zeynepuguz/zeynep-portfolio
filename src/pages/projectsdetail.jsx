import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

import classDist from "../images/class_dist.png";
import modelCompare from "../images/model_compare.png";
import f1Compare from "../images/f1_compare.png";
import disasterTable from "../images/disaster_table.png";
import disasterPie from "../images/disaster_pie.png";
import disasterCorr from "../images/disaster_corr.png";
import earthquakeCount from "../images/earthquake_count.png";
import economicLoss from "../images/economic_loss.png";
import adminlertumgeribildirimlerigorebilir from "../images/adminlertumgeribildirimlerigorebilir.png";
import belirlibirtarihegoreverigetirme from "../images/belirlibirtarihegoreverigetirme.png";
import calisanlartumgeribildirimlerigoremezkendindenbaskasini from "../images/calisanlartumgeribildirimlerigoremezkendindenbaskasini.png";
import dashboard8 from "../images/dashboard8.png";
import girisekrani7 from "../images/girisekrani7.png";
import gonderilengeribildirimler10 from "../images/gonderilengeribildirimler10.png";
import kayitsayfasi12 from "../images/kayitsayfasi12.png";
import profilpage11 from "../images/profilpage11.png";
import verigirisekrani9 from "../images/verigirisekrani9.png";
import scr1 from "../images/Ekran Görüntüsü (1124).png";
import scr2 from "../images/Ekran Görüntüsü (1125).png";
import scr3 from "../images/Ekran Görüntüsü (1126).png";
import scr4 from "../images/Ekran Görüntüsü (1127).png";
import scr5 from "../images/Ekran Görüntüsü (1128).png";
import scr6 from "../images/Ekran Görüntüsü (1129).png";
import scr7 from "../images/Ekran Görüntüsü (1130).png";
import scr8 from "../images/Ekran Görüntüsü (1134).png";
import scr9 from "../images/Ekran Görüntüsü (1135).png";
import scr10 from "../images/Ekran Görüntüsü (1136).png";
import scr11 from "../images/Ekran Görüntüsü (1137).png";
import scr12 from "../images/Ekran Görüntüsü (1138).png";
import scr13 from "../images/Ekran Görüntüsü (1139).png";
import image9 from "../images/image9.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import nofinal_midterm1 from "../images/nofinal_midterm1.png";
import only_midterm2 from "../images/only_midterm2.png";
import Fiziknotlari3 from "../images/Fiziknotlari3.png";
import kalan_ogrenciler4 from "../images/kalan_ogrenciler4.png";
import gecen_ogrenciler5 from "../images/gecen_ogrenciler5.png";
import Buthesabi6 from "../images/Buthesabi6.png";
import sorgular7 from "../images/sorgular7.png";
import page_setup9 from "../images/page_setup9.png";
import pdfolusturma10 from "../images/pdfolusturma10.png";
import pdf11 from "../images/pdf11.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image12 from "../images/image12.png";
import image13 from "../images/image13.png";
import image14 from "../images/image14.png";


const projectData = {
  1: {
  title: "Turkish Sentiment Analysis Tool with Deep Learning",
  description: `
A deep learning-based NLP system that classifies Turkish text sentiments as positive, negative, or neutral.
It was designed to process morphologically rich Turkish language data using deep learning architectures such as LSTM, BiLSTM, CNN-LSTM, and Stacked LSTM.`,
  sections: [
    {
      title: "📘 Overview",
      text: `
This project focuses on sentiment classification for Turkish-language customer reviews collected from e-commerce platforms.
The main goal was to build an accurate, domain-independent classifier capable of handling Turkish morphology.`,
    },
    {
      title: "📊 Dataset & Preprocessing",
      text: `
Dataset includes 92,000 Turkish sentences in three sentiment classes (positive, negative, neutral).
Zemberek library was used for lemmatization and cleaning, while NLPaug and BERT-based augmentation improved data balance.`,
      images: [classDist],
    },
    {
      title: "🧠 Model Architectures",
      text: `
LSTM-based models were compared, including BiLSTM, Stacked LSTM, and CNN-LSTM hybrids. LSTM reached 0.77 accuracy and macro F1.`,
      images: [modelCompare],
    },
    {
      title: "📁 Project Structure",
      text: `
The image below shows the general organization of the project files — including datasets, model notebooks, preprocessing scripts, tokenizer files, and trained model outputs.
This structure was designed to ensure modularity and clear workflow separation between data, models, and evaluation.`,
      images: [image9], // <— senin VS Code ekran görüntün burada
    },
    {
      title: "📈 Evaluation & Insights",
      text: `
Model comparison revealed that LSTM and BiLSTM models performed best, particularly on positive sentiment detection.`,
      images: [f1Compare],
    },
  ],
  tech: ["Python", "TensorFlow", "Keras", "Zemberek", "NLPaug", "FastAPI"],
  github: "https://github.com/zeynepuguz/STAJ22002",
},
  7:{
  title: "Turkish Sentiment Analysis Tool (Machine Learning)",
  description: `
A machine learning-based Turkish sentiment analysis system built with Random Forest classifier.
The model processes Turkish e-commerce reviews to predict sentiments as Positive, Neutral, or Negative.
This version focuses on classical ML techniques with TF-IDF vectorization, oversampling (SMOTE), and evaluation through precision, recall, and confusion matrix.`,
  sections: [
    {
      title: "📘 Overview",
      text: `
This project explores traditional machine learning approaches for sentiment analysis in the Turkish language.
A Random Forest model was trained on preprocessed text data represented with TF-IDF vectors.`,
    },
    {
      title: "📊 Dataset & Balancing",
      text: `
The dataset contains thousands of Turkish customer reviews labeled as positive, negative, or neutral.
Class imbalance was handled using the SMOTE technique, resulting in evenly distributed training samples.`,
      images: [image13, image14], // SMOTE öncesi ve sonrası görseller
    },
    {
      title: "🧠 Model Training & Evaluation",
      text: `
Random Forest achieved a training score of 0.98 and a test accuracy of 0.65.
Detailed metrics include precision, recall, and F1-score for each sentiment class.`,
      images: [image10, image11], // performance table and classification report
    },
    {
      title: "🧩 Confusion Matrix",
      text: `
The confusion matrix below illustrates the model's classification performance across sentiment categories.`,
      images: [image12], // confusion matrix
    },
    {
      title: "💬 Prediction Example",
      text: `
A real-time example demonstrates the model’s prediction for a new input text.
For instance, the sentence "beğenmedim" is correctly classified as 'Negative'.`,
      images: [image11], // prediction output screenshot
    },
  ],
  tech: ["Python", "Scikit-learn", "SMOTE", "TF-IDF", "Matplotlib", "Seaborn"],
  kaggle: "https://www.kaggle.com/code/zeynepuuz/turkceduyguanalizaraci",
},


  2: {
    title: "Studies on Data Science",
    description: `
A data analysis and visualization project developed to explore disaster trends using Python and Kaggle datasets.
The project demonstrates preprocessing, feature exploration, correlation analysis, and data-driven storytelling.`,
    sections: [
      {
        title: "📘 1. Project Overview",
        text: `
This study analyzes a global disaster dataset containing attributes such as disaster type, location, magnitude, fatalities, and economic loss.
The main purpose is to explore relationships among disaster characteristics, visualize patterns, and interpret insights.`,
        images: [disasterTable],
      },
      {
        title: "🌍 2. Disaster Type Distribution",
        text: `
The distribution of disasters by type shows that Earthquakes, Floods, and Tornadoes occur most frequently, while Wildfires and Hurricanes follow closely.
This visualization highlights global climate-related frequency similarities.`,
        images: [disasterPie],
      },
      {
        title: "💰 3. Correlation Analysis",
        text: `
The correlation between disaster magnitude and economic loss was examined. Interestingly, correlation appeared close to zero, suggesting that the economic impact is not solely determined by magnitude.`,
        images: [disasterCorr],
      },
      {
        title: "🌎 4. Earthquake Frequency by Country (2024)",
        text: `
Among all disasters, Earthquakes were analyzed by occurrence per country in 2024. Brazil and Japan experienced the highest number of recorded earthquakes.`,
        images: [earthquakeCount],
      },
      {
        title: "💸 5. Highest Economic Loss per Year",
        text: `
The years with the highest economic loss were detected through group-by analysis:
• 2024 → Wildfire (≈ 9.99×10⁸ $)
• 2025 → Flood (≈ 9.99×10⁸ $)
This insight reveals how different disaster types dominate annual economic impact.`,
        images: [economicLoss],
      },
      {
        title: "🧰 6. Technologies Used",
        text: `Python • Pandas • Matplotlib • Seaborn • NumPy • Kaggle Datasets • Jupyter Notebook`,
      },
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy", "Kaggle"],
    github: "https://www.kaggle.com/code/zeynepuuz/verionislemeornegi",
  },
  3: {
      title: "Corporate Communication Platform – InsightHub",
      description: `
    InsightHub is a corporate internal communication and feedback platform built with Java Spring Boot, MySQL, and Thymeleaf.  
    It enables employees to submit feedback, view their own submissions, and allows administrators to monitor company-wide feedback securely.`,
      sections: [
        {
          title: "📘 Overview",
          text: `
    InsightHub was developed to strengthen transparency and feedback culture within organizations.  
    Employees can register, log in, and manage their personal data while submitting structured feedback directly to the system.  
    Admins can track all feedback through role-based access control.`,
          images: [girisekrani7, kayitsayfasi12],
        },
        {
          title: "🔐 Authentication & Authorization",
          text: `
    The system implements secure login and registration with role-based authorization.  
    Each user's dashboard dynamically changes according to their role (Admin or Employee).  
    Admins can view all feedback, while employees can only view their own.`,
          images: [dashboard8, calisanlartumgeribildirimlerigoremezkendindenbaskasini],
        },
        {
          title: "🧾 Feedback Management",
          text: `
    Users can create, edit, and view feedback through intuitive forms.  
    Submitted feedback is stored in the database and listed for users or admins depending on access level.`,
          images: [verigirisekrani9, gonderilengeribildirimler10],
        },
        {
          title: "👤 Profile Management",
          text: `
    Each user has a personal profile page to update their name, email, and password.  
    Changes are validated and persisted securely via the backend.`,
          images: [profilpage11],
        },
        {
          title: "🏛 Admin Panel & Advanced Filtering",
          text: `
    Administrators have access to special analytics and filtering features via the integrated Swagger API interface.  
    They can:
    • View all feedback in the system  
    • Filter submissions by user or date  
    • Inspect system-wide feedback performance for decision-making.`,
          images: [adminlertumgeribildirimlerigorebilir, belirlibirtarihegoreverigetirme],
        },
        {
          title: "🧩 Architecture & Technologies",
          text: `
    InsightHub follows a layered MVC architecture (Spring Boot):

    • Controller Layer → Handles HTTP requests and routing  
    • Service Layer → Implements business logic  
    • Repository Layer → Interacts with MySQL through Spring Data JPA  
    • View Layer → Dynamic rendering with Thymeleaf templates and Bootstrap for responsive design.`,
        },
        {
          title: "🚀 Outcomes & Impact",
          text: `
     Enhanced corporate feedback culture  
     Simplified communication between employees and management  
     Role-based security and modular CRUD structure  
     Clean UI design using Thymeleaf and Bootstrap`,
        },
      ],
      tech: ["Java", "Spring Boot", "Spring MVC", "MySQL", "Thymeleaf", "Bootstrap", "Maven"],
      github: "https://github.com/zeynepuguz/InsightHub",
    },
    4: {
        title: "Library Management System (Java + PostgreSQL + Design Patterns)",
        description: `
      A desktop-based Java Swing application designed to manage a library system with role-based access (Personnel & Student).  
      This project applies six core design patterns (Singleton, Factory, Observer, State, Strategy, Decorator)  
      to ensure a modular, scalable, and maintainable architecture.`,
        sections: [
          {
            title: "📘 1. Overview",
            text: `
      The Library Management System provides two user roles:
      • **Personnel (Admin)** can add, edit, and manage books.  
      • **Students** can borrow, return, and review books.  

      Developed with **Java Swing** and **PostgreSQL**, the system ensures real-time database synchronization through **JDBC**.`,
            images: [scr1],
          },
          {
            title: "🔐 2. User Authentication",
            text: `
      Users log in securely with their email and password.  
      The **Factory Pattern** dynamically generates interfaces based on user roles —  
      Admins see Personnel Panel, Students see Student Panel.`,
            images: [scr2, scr3],
          },
          {
            title: "📊 3. Database Integration",
            text: `
      PostgreSQL manages the entire data layer:  
      • **kullanicilar** → stores user info (name, role, email, password)  
      • **kitaplar** → stores book details (title, author, category, status)  
      • **odunc** → tracks borrowed and returned books  

      All CRUD operations are synchronized in real-time via **Observer Pattern**.`,
            images: [scr4, scr5],
          },
          {
            title: "🧠 4. Design Patterns in Action",
            text: `
      The system integrates six major patterns:

      🧩 **Singleton Pattern:**  
      Used in the DatabaseConnection class to ensure only one instance of the connection exists.  
      → Prevents redundant or conflicting DB sessions.  

      🏭 **Factory Pattern:**  
      Used for dynamic creation of user roles (Personnel, Student).  
      → The system returns the correct interface and privileges based on role type.  

      👁️ **Observer Pattern:**  
      Ensures the GUI (Swing components) update automatically when data changes in the backend.  
      → When a book is added, borrowed, or returned, UI lists refresh without manual reload.  

      🔄 **State Pattern:**  
      Controls the "status" of books — **Rafta**, **Ödünç Alındı**, **İade Edildi**.  
      → Each book object changes its internal state dynamically, reducing condition-heavy logic.  

      ⚙️ **Strategy Pattern:**  
      Implements flexible search functionality — search by **book title**, **author**, or **category**.  
      → Different strategies can be applied without altering the main search logic.  

      🎨 **Decorator Pattern:**  
      Improves GUI aesthetics — buttons, forms, and messages are styled dynamically without rewriting base components.`,
            images: [scr6],
          },
          {
            title: "💼 5. Personnel Panel",
            text: `
      Personnel users can:
      • Add new books  
      • Track available and borrowed books  
      • Instantly see updates reflected in PostgreSQL`,
            images: [scr7],
          },
          {
            title: "📚 6. Student Panel",
            text: `
      Students can:
      • View all books in the library  
      • Borrow or return books  
      • Rate and comment on books  
      • Search dynamically by multiple criteria  

      Borrowing logic is governed by **State Pattern**, preventing new loans until returns are completed.`,
            images: [scr8, scr9, scr10, scr11, scr12, scr13],
          },
          {
            title: "🧩 7. System Architecture Flow",
            text: `
      1️⃣ User logs in → Singleton DB connection created  
      2️⃣ Factory assigns correct role interface (Admin / Student)  
      3️⃣ Personnel adds a book → Observer updates Student view  
      4️⃣ State Pattern manages availability transitions  
      5️⃣ Strategy enables flexible search  
      6️⃣ Decorator applies consistent UI enhancements`,
          },
          {
            title: "🚀 8. Outcomes & Learnings",
            text: `
      ✅ Applied six major design patterns in one cohesive project  
      ✅ Strengthened modular OOP structure  
      ✅ Achieved real-time DB synchronization  
      ✅ Delivered a functional and user-friendly desktop library system`,
          },
        ],
        tech: [
          "Java",
          "Swing",
          "PostgreSQL",
          "JDBC",
          "IntelliJ IDEA",
          "Design Patterns",
        ],
        github: "https://github.com/zeynepuguz/KutuphaneSistemi",
      },
  5: {
  title: "E-Commerce Website (PHP + MySQL + HTML/CSS + JS)",
  description: `
  A modern and user-friendly e-commerce platform.  
  It includes essential commercial features such as user registration/login, product listing, filtering, cart management, and a payment page.  
  The interface is fully responsive, and dynamic data management is achieved through PHP and MySQL.`,
  sections: [
    {
      title: "🛍️ 1. Overview",
      text: `
      This project is a fully functional e-commerce web application where users can register, log in, browse products, add them to the cart, and complete their purchases.  
      The backend was built using PHP & MySQL, while the frontend was developed with HTML, CSS, and JavaScript.`,
      images: [image1],
    },
    {
      title: "👥 2. User Authentication System",
      text: `
      Users can register to the system with their name, email, and password.  
      Once logged in, users are greeted by name and can continue with their personalized shopping experience.`,
      images: [image2, image3],
    },
    {
      title: "🛒 3. Product Listing & Filtering",
      text: `
      Products are categorized under "Outerwear", "Bottom Wear", "Top Wear", "New Arrivals", and "Discounted Products".  
      Users can filter products by price, size, fabric type, and color.  
      All data is dynamically fetched from the MySQL database.`,
      images: [image4, image5],
    },
    {
      title: "💬 4. Dynamic Cart System",
      text: `
      Users can add, remove, or change the quantity of products in their cart.  
      Cart data is managed via PHP session handling and seamlessly passed to the payment page.`,
      images: [image6],
    },
    {
      title: "💳 5. Payment Page",
      text: `
      The payment page displays a summary of the cart, shipping status, and total cost.  
      The user enters their name, address, and payment details to complete the (demo-level) checkout.  
      Total price, tax, and shipping are dynamically calculated after submission.`,
      images: [image7, image8],
    },
  ],
  tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "WampServer"],
  github: "https://github.com/zeynepuguz/e-ticaret-sitesi",
  },


};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="text-center text-white py-32">
        <p className="text-lg mb-4">Project not found 🧐</p>
        <button
          onClick={() => navigate("/projects")}
          className="bg-purple-500/20 border border-purple-400/40 text-purple-300 px-5 py-2 rounded-full hover:bg-purple-500/30 transition"
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-200 py-16 px-6" style={{ background: "radial-gradient(circle at center, #000000 0%, #0a0a0a 50%, #000000 100%)" }}>
      {/* 🔙 Back Button */}
      <motion.button
        onClick={() => navigate("/projects")}
        className="block mx-auto mb-10 bg-purple-500/10 border border-purple-400/40 text-purple-300 px-5 py-2 rounded-full hover:bg-purple-500/20 transition-all"
      >
        ← Back to Projects
      </motion.button>

      {/* 🧠 Project Title */}
      <motion.h1
        className="project-detail-title text-5xl font-extrabold text-center mb-10 text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

      {/* 💬 Description */}
      <motion.p
        className="max-w-4xl mx-auto text-gray-300 text-lg text-center mb-20 leading-relaxed tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.description}
      </motion.p>

      {/* 📄 Sections */}
      <div className="max-w-6xl mx-auto space-y-16">
        {project.sections?.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="project-section p-10 rounded-2xl border border-purple-500/20 transition-all"
            style={{ background: "rgba(0, 0, 0, 0.6)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
              {section.title}
            </h2>

            <p className="text-gray-300 leading-relaxed text-justify whitespace-pre-line tracking-wide mb-8">
              {section.text}
            </p>

            {section.images && (
              <div className="flex flex-col items-center justify-center gap-8">
                {section.images.map((img, j) => (
                  <div
                    key={j}
                    className="w-full sm:w-4/5 md:w-3/5 lg:w-2/3 flex flex-col items-center"
                  >
                    <img
                      src={img}
                      alt={`${section.title}-${j}`}
                      className="rounded-2xl border border-gray-700 shadow-lg hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* ⚙️ Technologies */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          🧰 Technologies Used
        </h3>
        <div className="tech-badges flex flex-wrap justify-center gap-3">
          {project.tech?.map((tech, i) => (
            <span
              key={i}
              className="bg-purple-500/10 border border-purple-400/30 text-purple-300 px-4 py-1 rounded-full text-sm font-medium hover:bg-purple-500/20 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-purple-500/20 border border-purple-400/40 text-purple-300 hover:bg-purple-500/30 transition px-5 py-2 rounded-full backdrop-blur font-medium"
          >
            🔗 View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
