import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12 md:py-20 px-4 text-center">
          <div className="container mx-auto">
            <img
              src="image.png"
              alt="Pankaj Yadav"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-blue-600 bg-slate-700"
              width={220}
              height={500}
            />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              Pankaj Yadav
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-4">
              Full Stack Developer | Software Engineer
            </p>
            <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">
              I&quot;m a passionate web developer specializing in building and
              designing modern web applications using the latest technologies. I
              have experience in front-end and back-end development.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href="https://github.com/Pankajol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-600 hover:text-black text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-darasingh-yadav-058678259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-600 hover:text-blue-800 text-3xl" />
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 hover:text-blue-600 text-3xl" />
              </a>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="py-12 md:py-20 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">JavaScript</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">React.js</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Node.js</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">NextJs</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">AWS</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Python</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Tailwind CSS</h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">MongoDB</h3>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className="py-12 md:py-20 bg-gray-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  width={220}
                  height={500}
                  // src="/images/image.png"
                  src="https://cdn.pixabay.com/photo/2020/11/01/03/08/youtube-5702765_640.jpg"
                  alt="Project 1"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl text-gray-800 font-bold mb-2">
                  My YouTube ShowCase
                </h3>
                <p className="text-gray-600">
                  Our platform allows users to easily upload and showcase their
                  videos and images. Whether you are sharing memories,
                  tutorials, or creative content, our app provides a simple and
                  user-friendly interface to upload, manage, and display media.
                  Perfect for creators looking to share their visual stories
                  with the world.
                </p>
                <Link href="#" className="text-blue-400 ">
                  See Here
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  width={220}
                  height={500}
                  // src="/images/image.png"
                  src="https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXN8ZW58MHx8MHx8fDA%3D"
                  alt="Project 2"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl text-gray-800 font-bold mb-2">
                  Write Notes
                </h3>
                <p className="text-gray-600">
                  This app combines the simplicity of note-taking with powerful
                  media features, allowing users to upload videos and images
                  directly within their notes. Organize thoughts, ideas, and
                  media in one place, making it easy to track projects or share
                  content. Perfect for creators, students, and professionals
                  alike!
                </p>
                <Link to="/allnotes" className="text-blue-400">
                  See Here
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  width={220}
                  height={500}
                  // src="/images/image.png"
                  src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid"
                  alt="Project 3"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl text-gray-800 font-bold mb-2">
                  See Websites
                </h3>
                <p className="text-gray-600">
                  As a web developer, I specialize in building dynamic,
                  responsive websites and applications that offer seamless user
                  experiences. My expertise spans front-end and back-end
                  development, utilizing modern technologies like HTML, CSS,
                  JavaScript, and MERN stack. I focus on creating efficient,
                  scalable solutions tailored to meet the needs of businesses
                  and users alike.
                </p>
                <a
                  href="https://taroncom-pankaj-yadavs-projects-906bd380.vercel.app/"
                  className="text-blue-400"
                >
                  See Here
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* contact us */}
        <section>
          {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-semibold mb-6 text-center">
              Contact Us
            </h1>

            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 "action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="575e69b9-8e78-42b4-84ed-3278f8348c51" />
                <div className="flex flex-col">
                  <label className="text-lg font-medium">Full Name</label>
                  <input
                    type="text"
                    className="mt-2 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg font-medium">Email Address</label>
                  <input
                    type="email"
                    className="mt-2 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="text-lg font-medium">Message</label>
                  <textarea
                    className="mt-2 p-3 border border-gray-300 rounded-md"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <button className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div> */}
          <Contact />
        </section>
      </main>
      {/* Footer */}

      <footer className="bg-base-300 text-base-content p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <nav>
            <h6 className="footer-title text-lg font-bold">Services</h6>
            <ul className="flex flex-col space-y-2">
              <li>
                <a className="link link-hover">Branding</a>
              </li>
              <li>
                <a className="link link-hover">Design</a>
              </li>
              <li>
                <a className="link link-hover">Marketing</a>
              </li>
              <li>
                <a className="link link-hover">Advertisement</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="footer-title text-lg font-bold">Company</h6>
            <ul className="flex flex-col space-y-2">
              <li>
                <a className="link link-hover">About Us</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
              <li>
                <a className="link link-hover">Jobs</a>
              </li>
              <li>
                <a className="link link-hover">Press Kit</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="footer-title text-lg font-bold">Social</h6>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/_yadav0pankaj/"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.243 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.243 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.243-1.319-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.344-2.633 1.319-3.608.975-.975 2.243-1.257 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.737 0 8.332.012 7.052.07 5.773.129 4.497.392 3.362 1.527 2.227 2.662 1.964 3.937 1.905 5.217.847 5.497.835 9.263.835 12s.012 6.503.07 7.783c.059 1.28.322 2.555 1.457 3.69 1.135 1.135 2.41 1.398 3.69 1.457 1.28.059 1.684.07 5.057.07 3.373 0 3.777-.012 5.057-.07 1.28-.059 2.555-.322 3.69-1.457 1.135-1.135 1.398-2.41 1.457-3.69.058-1.28.07-1.684.07-5.057s-.012-3.777-.07-5.057c-.059-1.28-.322-2.555-1.457-3.69-1.135-1.135-2.41-1.398-3.69-1.457C15.273.012 14.869 0 11.997 0zM12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.164A4.002 4.002 0 1 1 12 6.836a4.002 4.002 0 1 1 0 8.002zm6.406-11.845a1.44 1.44 0 1 0 2.88 0 1.44 1.44 0 1 0-2.88 0z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@pankajal-y7b"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100019445673155"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Root;
