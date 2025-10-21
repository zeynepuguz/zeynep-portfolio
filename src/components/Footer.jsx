export default function Footer() {
  return (
    <footer className="mt-20 py-6 text-center text-gray-300 bg-transparent border-t border-pink-400/30">
      <div className="container mx-auto px-4">
        <p className="mb-3 text-sm sm:text-base">
          © 2025 Zeynep Uğuz | Full Stack AI Developer
        </p>

        {/* 🌐 Sosyal linkler */}
        <div className="flex justify-center gap-4 sm:gap-6 text-lg sm:text-xl">
          {/* E-posta */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zeynppuguzz4@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Send E-mail"
            className="hover:text-pink-400 transition p-2 hover:bg-pink-500/10 rounded-lg"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/zeynep-u%C4%9Fuz-ab5a93262/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:text-blue-400 transition p-2 hover:bg-blue-500/10 rounded-lg"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/zeynepuguz"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="hover:text-gray-200 transition p-2 hover:bg-gray-500/10 rounded-lg"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
