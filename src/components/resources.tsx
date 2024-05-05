//'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const Resources = () => {
  const [currFileData, setCurrFileData] = useState();
  const [saving, setSaving] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterVideoCategory, setFilterVideoCategory] = useState('All'); // Default to 'All'
  const [filterDocCategory, setFilterDocCategory] = useState('All');
  const [clicked, setClicked] = useState(false);
  const vidTopics = [
    { id: 1, name: 'React Basics',text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Technology' },
    { id: 2, name: 'Node.js',text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Technology' },
    { id: 3, name: 'Art History',text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Arts' },
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
  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };
  const docTopics = [
    { id: 1, name: 'React Basics Documentation',text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Technology' },
    { id: 2, name: 'Node.js Documentation',text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Technology' },
    { id: 3, name: 'Art History Documentation',text: "ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", category: 'Arts' },
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

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setClicked(!clicked);
  };
  // List of available categories (you can customize this)
  const categories = ['All', 'Technology', 'Science', 'Arts', 'Sports'];
  
  const Videos = () => (
    <div class="flex">
      <div class="flex">
        <aside class="w-44 fixed left-0  h-screen bg-slate-700 p-10 z-10 text-white">
            {categories.map((category) => (
              <div key={category}>
                <input type="radio" id={category} name={category} value={category} checked={filterVideoCategory.includes(category)} onChange={(e) => setFilterVideoCategory(e.target.value)} />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
        </aside>    
      </div>
      <div class="mx-auto">
      <div class="flex justify-center z-10">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" style={{ width: '75vw', marginLeft: '10vw' }}>
        {filteredVideoTopics.map((vidTopic) => (
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

const Documentation = () => (
    <div class="flex">
      <div class="flex">
        <aside class="w-44 fixed left-0  h-screen bg-slate-700 p-10 z-10 text-white">
            {categories.map((category) => (
              <div key={category}>
                <input type="radio" id={category} name={category} value={category} checked={filterDocCategory.includes(category)} onChange={(e) => setFilterDocCategory(e.target.value)} />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
        </aside>    
      </div>
      <div class="mx-auto">
      <div class="flex justify-center z-10">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8" style={{ width: '75vw', marginLeft: '10vw' }}>
        {filteredDocTopics.map((docTopic) => (
          <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 transition-transform transform-gpu hover:scale-105 hover:shadow-lg" style={{ width: '200px' }}>
            
              <div class="flex sm:justify-between sm:gap-4 ">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {docTopic.name.length > 10 ? docTopic.name.slice(0, 10) + '...' : docTopic.name}
                  </h3>
                  <p class="mt-1 text-xs font-medium text-gray-600">{docTopic.category}</p>
                </div>

              </div>

              <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                  {docTopic.text.length > 90 ? docTopic.text.slice(0, 90) + '...' : docTopic.text}
                </p>
              </div>
          </a>

      ))}
      </div>
      </div>
    </div>
  );
  

  return (
  <div class="block">
    <div class="border-b border-gray-200 dark:border-gray-700 ">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400">
        <li class="me-2" >
          <h3 className={`${clicked ? 'inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`} onClick={() => handleTabClick(1)}>
            Videos
          </h3>
        </li>
        <li class="me-2">
          <h3 className={` ${!clicked ? 'inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`} aria-current="page" onClick={() => handleTabClick(2)}>
            Documentation
          </h3>
        </li>
      </ul>
    </div>
    {activeTab === 1 && (<Videos />)}
    {activeTab === 2 && (<Documentation />)}
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div class="fixed bottom-10 right-20 z-100">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:shadow-lg">Post</button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal style={{  borderWidth: '4px'  }}>
        <div class="z-10" style={{ position: 'absolute', top: '25vh', left: '25vw',backgroundColor: '#F5F5F5'}}>
          <h1 style={{ textAlign: "center" }}>Text Editor In React JS</h1>
            <div style={{ display: "grid", justifyContent: "center"}}>
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                placeholder="write your content ...."
                onChange={handleProcedureContentChange}
                style={{ height: "300px",  }} />
            </div>
          </div>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  );
};

export default Resources;

