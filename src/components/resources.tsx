"use client"
import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import './sidebar.css';
import Link from 'next/link'

interface Docs {
  name: string;
  text: string;
  category: string;
}


const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Resources = () => {
  const [currFileData, setCurrFileData] = useState();
  const [saving, setSaving] = useState(false);
  const [value, setValue] = useState('P');

  const [searchTerm, setSearchTerm] = useState('');
  const [filterVideoCategory, setFilterVideoCategory] = useState('All'); // Default to 'All'
  const [filterDocCategory, setFilterDocCategory] = useState('All');
  const [clicked, setClicked] = useState(false);
  const vidTopics = [
    { id: 1, name: 'React Basics', text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'React' },
    { id: 2, name: 'Node.js', text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'javascript' },
    { id: 3, name: 'Django History', text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Django' },
    // Add more topics here...
  ];

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];
  const handleProcedureContentChange = (content: any) => {
    //console.log("content---->", content);
    setValue(content);
  };
  const docTopics = [
    { id: 1, name: 'React Basics Documentation', text: `
    <main className="w-3/4 p-6 bg-white shadow-md rounded-lg ml-6">
        <!-- Node.js Documentation -->
        <section id="react-introduction" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React - Introduction</h2>
            <p className="text-gray-700">Welcome to the React documentation. Here you will find all the information you need to get started with React.</p>
        </section>

        <section id="react-installation" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React - Installation</h2>
            <p className="text-gray-700">To install React, follow these steps:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>npx create-react-app my-app</code></pre>
        </section>

        <section id="react-usage" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React - Usage</h2>
            <p className="text-gray-700">Here are some examples of how to use React:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                    import React from 'react';
                    import ReactDOM from 'react-dom';

                    function App() {
                      return (
                        <div>
                          <h1>Hello, world!</h1>
                        </div>
                      );
                    }

                    ReactDOM.render(<App />, document.getElementById('root'));
                </code>
            </pre>
        </section>

        <section id="react-api" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React - API Reference</h2>
            <p className="text-gray-700">For detailed API information, refer to the following documentation:</p>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Method 1:</strong> <code>ReactDOM.render()</code> - Renders a React component</li>
                <li><strong>Method 2:</strong> <code>useState()</code> - Returns a stateful value and a function to update it</li>
            </ul>
        </section>

        <section id="react-faq" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">React - FAQ</h2>
            <p className="text-gray-700">Frequently Asked Questions:</p>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Question 1:</strong> How do I install React? <br> <strong>Answer:</strong> Use the command <code>npx create-react-app my-app</code>.</li>
                <li><strong>Question 2:</strong> How do I create a React component? <br> <strong>Answer:</strong> Create a function that returns JSX and use <code>ReactDOM.render()</code> to render it.</li>
            </ul>
        </section>
        </main>`, category: 'React' },
    { id: 2, name: 'Node.js Documentation', text: `
    <main className="w-3/4 p-6 bg-white shadow-md rounded-lg ml-6">
        <!-- Node.js Documentation -->
        <section id="nodejs-introduction" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js - Introduction</h2>
            <p className="text-gray-700">Welcome to the Node.js documentation. Here you will find all the information you need to get started with Node.js.</p>
        </section>

        <section id="nodejs-installation" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js - Installation</h2>
            <p className="text-gray-700">To install Node.js, follow these steps:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>npm install node</code></pre>
        </section>

        <section id="nodejs-usage" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js - Usage</h2>
            <p className="text-gray-700">Here are some examples of how to use Node.js:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                    const http = require('http');
                    const hostname = '127.0.0.1';
                    const port = 3000;
                    
                    const server = http.createServer((req, res) => {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'text/plain');
                      res.end('Hello World\n');
                    });
                    
                    server.listen(port, hostname, () => {
                      console.log(\`Server running at http://\${hostname}:\${port}/\`);
                    });
                </code>
            </pre>
        </section>

        <section id="nodejs-api" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js - API Reference</h2>
            <p className="text-gray-700">For detailed API information, refer to the following documentation:</p>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Method 1:</strong> <code>http.createServer()</code> - Creates an HTTP server</li>
                <li><strong>Method 2:</strong> <code>res.end()</code> - Ends the response process</li>
            </ul>
        </section>

        <section id="nodejs-faq" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Node.js - FAQ</h2>
            <p className="text-gray-700">Frequently Asked Questions:</p>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Question 1:</strong> How do I install Node.js? <br> <strong>Answer:</strong> Use the command <code>npm install node</code>.</li>
                <li><strong>Question 2:</strong> How do I create a server in Node.js? <br> <strong>Answer:</strong> Use the <code>http.createServer()</code> method.</li>
            </ul>
        </section>
        </main>`, category: 'javascript' },
    { id: 3, name: 'Django Documentation', text: `
    <main className="w-3/4 p-6 bg-white shadow-md rounded-lg ml-6">
        <!-- Node.js Documentation -->
        <section id="python-introduction" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Python - Introduction</h2>
            <p className="text-gray-700">Welcome to the Python documentation. Here you will find all the information you need to get started with Python.</p>
        </section>

        <section id="python-installation" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Python - Installation</h2>
            <p className="text-gray-700">To install Python, follow these steps:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>sudo apt-get install python3</code></pre>
        </section>

        <section id="python-usage" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Python - Usage</h2>
            <p className="text-gray-700">Here are some examples of how to use Python:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                    print("Hello, World!")
                </code>
            </pre>
        </section>

        <section id="python-api" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Python - API Reference</h2>
            <p className="text-gray-700">For detailed API information, refer to the following documentation:</p>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Method 1:</strong> <code>print()</code> - Prints to the console</li>
                <li><strong>Method 2:</strong> <code>len()</code> - Returns the length of an object</li>
            </ul>
        </section>

        <section id="python-faq" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Python - FAQ</h2>
            <p className="text-gray-700">Frequently Asked Questions:</p>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Question 1:</strong> How do I install Python? <br> <strong>Answer:</strong> Use the command <code>sudo apt-get install python3</code>.</li>
                <li><strong>Question 2:</strong> How do I print to the console in Python? <br> <strong>Answer:</strong> Use the <code>print()</code> function.</li>
            </ul>
        </section>
        </main>
    `, category: 'Django' },
    // Add more topics here...
  ];

  // Filter topics based on search term and category
  const filteredVideoTopics = vidTopics.filter((vidTopic) => {
    const matchesSearch = vidTopic.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterVideoCategory === 'All' || vidTopic.category === filterVideoCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredDocTopics = docTopics.filter((docTopic) => {
    const matchesSearch = docTopic.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterDocCategory === 'All' || docTopic.category === filterDocCategory;
    return matchesSearch && matchesCategory;
  });

  const [activeTab, setActiveTab] = useState(1);

  const changeSearchTerm = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const [vidCollapsed, setVidCollapsed] = useState(false);
  const [docCollapsed, setDocCollapsed] = useState(false); 

  const toggleVidCollapse = () => {
    setVidCollapsed(!vidCollapsed);
  };
  const toggleDocCollapse = () => {
    setDocCollapsed(!docCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setVidCollapsed(window.innerWidth < 900);
      setDocCollapsed(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle tab click
  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
    setClicked(!clicked);
  };
  // List of available categories (you can customize this)
  const categories = ['All', 'Java', 'javascript', 'React', 'Python', 'DSA', 'Django'];


  const handlePost = () => {
    console.log(value);
  };


  return (
    <div className="block">
      <div className="border-b border-gray-200 dark:border-gray-700 ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400">
          <li className="me-2" >
            <h3 className={`${!clicked ? 'inline-flex items-center justify-center p-4 border-b-2 tabButton rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`} aria-current="page" onClick={() => handleTabClick(1)}>
              Videos
            </h3>
          </li>
          <li className="me-2">
            <h3 className={` ${clicked ? 'inline-flex items-center justify-center p-4 border-b-2 tabButton rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`}  onClick={() => handleTabClick(2)}>
              Documentation
            </h3>
          </li>
        </ul>
      </div>
      {activeTab === 1 &&
        (<Videos
          categories={categories}
          filterVideoCategory={filterVideoCategory}
          setFilterVideoCategory={setFilterVideoCategory}
          searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}
          filteredVideoTopics={filteredVideoTopics}
          collapsed = {vidCollapsed}
          setCollapsed = {setVidCollapsed}
          toggleCollapsed = {toggleVidCollapse}
        />)}
      {activeTab === 2 &&
        (<Documentation
          categories={categories}
          filterDocCategory={filterDocCategory}
          setFilterDocCategory={setFilterDocCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredDocTopics={filteredDocTopics}
          collapsed = {docCollapsed}
          setCollapsed = {setDocCollapsed}
          toggleCollapsed = {toggleDocCollapse}
        />)}
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="fixed bottom-10 right-20 z-100">
            <button style={{ backgroundColor: "#7c3aed" }} className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:shadow-lg">Post</button>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content>
            <div className="" style={{ position: 'absolute', top: '25vh', left: '25vw', backgroundColor: '#F5F5F5' }}>
              <h1 style={{ textAlign: "center" }}>Text Editor In React JS</h1>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  content={value}
                  placeholder="write your content ...."
                  onChange={handleProcedureContentChange}
                  style={{ height: "50vh" , width: "50vw" }} />
                <button className="relative right-0 hover:bg-blue-700 text-white font-bold rounded-full" style={{ backgroundColor: "#7c3aed", width: '15%', left: '80%' }} onClick={handlePost}>Submit</button>
              </div>
            </div>
            <Dialog.Close asChild>
                <button className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none z-20" aria-label="Close">
                  <Cross2Icon />
                </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Resources;


const Videos = ({ searchTerm, categories, changeSearchTerm, filteredVideoTopics, filterVideoCategory, setFilterVideoCategory,  collapsed, setCollapsed, toggleCollapsed}: any) => (
  <div className="flex">
    <div className="flex parentF">
      <aside className={`w-44 fixed left-0  h-screen bg-slate-300 p-10 z-10 text-black ${collapsed ? 'collapsed' : 'pol'} respDoc`} >
        {categories.map((category: any) => (
          <div key={category}>
            <input style={{ accentColor: "#7c3aed" }} type="radio" id={category} name={category} value={category} checked={filterVideoCategory.includes(category)} onChange={(e) => setFilterVideoCategory(e.target.value)} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </aside>
      <div className={`block fixed ${collapsed ? 'posarrow2' : 'posarrow'} top-1/2 z-20`}>
        <button className="z-10 block" onClick={toggleCollapsed}>
          {collapsed ? 
            <div className="">
              <i className="arrow right"></i>
            </div>  
            : 
            <div className="">
              <i className="arrow left"></i>
            </div> 
          }
        </button>
      </div>
    </div>
    <div className="mx-auto">
      <div className="flex justify-center z-10">
        <input
          type="text"
          placeholder="Search topics..."
          defaultValue={searchTerm}
          onChange={changeSearchTerm}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" style={{ width: '75vw', marginLeft: '10vw' }}>
        {filteredVideoTopics.map((vidTopic: any) => (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <a href="#" className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 transition-transform transform-gpu hover:scale-105 hover:shadow-lg">
                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {vidTopic.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {vidTopic.text.length > 100 ? vidTopic.text.slice(0, 100) + '...' : vidTopic.text}
                  </p>
                </div>
              </a>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  {vidTopic.name}
                </Dialog.Title>
                <iframe width="402" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                  {vidTopic.text}
                </Dialog.Description>
                <Dialog.Close asChild>
                  <button className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </div>
  </div>
);


const Documentation = ({ categories, filterDocCategory, searchTerm, setSearchTerm, filteredDocTopics, setFilterDocCategory, collapsed, setCollapsed, toggleCollapsed }: any) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [param, setParam] = useState(0);

  const handleClick = (name1: string, text1: string, category1: string) => {
    setName(name1);
    setText(text1);
    setCategory(category1);
    setParam(1);
  };

  return (
    <div className="flex">
      <div className="flex parentF">
        <aside className={`w-44 fixed left-0 h-screen bg-slate-300 p-10 z-10 text-black ${collapsed ? 'collapsed' : 'pol'} respDoc`}>
          {categories.map((category: any) => (
            <div key={category}>
              <input type="radio" id={category} name="category" value={category} checked={filterDocCategory.includes(category)} onChange={(e) => setFilterDocCategory(e.target.value)} />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </aside>
        <div className={`block fixed ${collapsed ? 'posarrow2' : 'posarrow'} top-1/2 z-20`}>
          <button className="z-10 block" onClick={toggleCollapsed}>
            {collapsed ? (
              <div>
                <i className="arrow right"></i>
              </div>
            ) : (
              <div>
                <i className="arrow left"></i>
              </div>
            )}
          </button>
        </div>
      </div>
      {param === 0 && (
        <div className="mx-auto">
          <div className="flex justify-center z-10">
            <input
              type="text"
              placeholder="Search topics..."
              defaultValue={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 docDiv">
            {filteredDocTopics.map((docTopic: any) => (
              <a
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 transition-transform transform-gpu hover:scale-105 hover:shadow-lg doclists"
                onClick={() => handleClick(docTopic.name, docTopic.text, docTopic.category)}
              >
                <div className="flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {docTopic.name.length > 10 ? docTopic.name.slice(0, 10) + '...' : docTopic.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-600">{docTopic.category}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {docTopic.text.length > 90 ? docTopic.text.slice(0, 90) + '...' : docTopic.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      {param === 1 && <Doc name={name} text={text} category={category} param={param} setParam={setParam} />}
    </div>
  );
};

const Doc = ({ name, text, category, param, setParam }: any) => {
  const backClick = () => {
    setParam(0);
  };

  return (
    <div className="mx-auto justify-center doc relative">
      <button className="backbutton" onClick={backClick}><svg className="back" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21z"></path></svg></button>
      <br />

       <div className="container mx-auto p-6">
       
        <header className="mb-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">{name}</h1>
            <p className="text-center text-gray-600 mt-2">{category}</p>
        </header>

        
        <div className="flex">
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>

      </div>
    </div>
  );
};
