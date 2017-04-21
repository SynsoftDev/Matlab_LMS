import Vue from 'vue'

// original getClassData which makes the request
// export function getClassData(cb) {
//     return Vue.http.get('/api/class')
//         .then(cdata => cb(cdata.data))
// }

export function getClassData(cb) {
    cb({
        classTitle: "Example Class",
        units: [
            {
                name: "Unit 1",
                uid: "1",
                lessons: [
                    // first lesson
                    {
                        name: "Lesson 1",
                        lid: "1.1",  // unit 1 lesson 1
                        title: "Test lesson...",
                        type: "",
                        introduction: "",
                        video: "",
                        // list of questions for this lesson go here
                        questions: [
                            {
                                id: "1.1.1",    // unit 1, lesson 1, question 1

                                // the particular component that the type referrs to is 
                                // determined with the mapping in qtypes/index.js
                                // so the json "example" => example.question.vue
                                type: "example"
                            },
                            {
                                id: "1.1.2",    // unit 1, lesson 1, question 2
                                type: "example"
                            }
                        ]
                    },
                ]
            },
            // add more units here... see https://ee.hvullc.com/api/class for real example
        ],
		chapters: [
            {
                name: "Chapter 1",
                cid: "1",
                versions: [
                    {
                        name: "Chapter 1",
                        vid: "1.0",
                        title: "Course Overview",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter1.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Introductions: numerical analysis, MATLAB, and instructor background',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=it2SsTWOJRg&index=1&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/it2SsTWOJRg?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: "",
						solutions: "",
                        videos: "",
						homework: "",
						questions: "",
                    },
                ],
            },
			{
                name: "Chapter 2",
                cid: "2",
                versions: [
                    {
                        name: "Chapter 2",
                        vid: "2.0",
                        title: "MATLAB Environment and Desktop",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter2.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Desktop Basics and Environment Control GUIs: using GUIs for workspace, file, and folder management',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=6F89wOGgRf0&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt&index=2',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6F89wOGgRf0?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Environment Control Functions: Using MATLAB commands for workspace, file, and folder management',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=891XsYaYRsU&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt&index=3',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/891XsYaYRsU?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch2_ex.pdf',
							},
						],
						solutions: "",
                        videos: [
							{
								title: 'Exercise 2.1',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=1Kia2CiQ77I&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Kia2CiQ77I?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 2.2',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=1Kia2CiQ77I&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Kia2CiQ77I?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
						],
						homework: "",
						questions: [
							{
								label:'',
								question:'Provide the right sequence of options that will carry out the following:',
								details: [
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Create a directory named tutorial1 in the current working directory</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Save the workspace in the tutorial1 directory in a file named file1</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Clear the workspace</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Load file1 into the workspace</li>',
									},
									{
										viewType: 'box',
										contentType: 'array',
										content: ['a) mkdir tutorial1', 'b) save mkdir/file1', 'c) load tutorial1/file1', 'd) clear all', 'e) mkdir ("tutorial1")', 'f) save tutorial', 'g) clear', 'h) load file1', 'i) cd tutorial1', 'j) save tutorial1', 'k) save tutorial1/file1', 'l) mkdir("newdir")', 'm) newdir = "tutorial1"'],
									},
								],
								options: [
									{
										type: 'text',
										content: '',
										contentPosition: '',
										correct: '',
									},
									{
										type: 'text',
										content: '',
										contentPosition: '',
										correct: '',
									},
									{
										type: 'text',
										content: '',
										contentPosition: '',
										correct: '',
									},
									{
										type: 'text',
										content: '',
										contentPosition: '',
										correct: '',
									},
								]
							},
							{
								label:'',
								question:'Provide a series of commands which will:',
								details: [
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Create a directory named tutorial2 in the current working directory</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>List the files and folders in the current working directory</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Save the workspace in the tutorial2 directory in a file named myfile</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Clear the workspace</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Load file1 into the workspace</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Check the contents of the workspace</li>',
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "&gt;&gt; mkdir tutorial2 <br>&gt;&gt; show tutorial2/file1 <br> &gt;&gt; save <br>&gt;&gt; load tutorial1/file1",
										contentPosition: 'after',
										correct: "",
									},
									{
										type: 'checkbox',
										content: "&gt;&gt; mkdir ('tutorial2'); <br> &gt;&gt; show tutorial2 <br> &gt;&gt; clear <br> &gt;&gt; load file1",
										contentPosition: 'after',
										correct: "",
									},
									{
										type: 'checkbox',
										content: "&gt;&gt; newdir = tutorial; <br> &gt;&gt; mkdir('newdir') <br> &gt;&gt; save tutorial2 <br> &gt;&gt; clear all <br> &gt;&gt; load tutorial2/file1",
										contentPosition: 'after',
										correct: "",
									},
								]
							},
							{
								label:'',
								question:'Provide a series of commands which will:',
								details: [
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Create a directory named tutorial3 in the current working directory</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Make tutorial3 the current working directory</li>',
									},
									{
										viewType: 'normal',
										contentType: 'string',
										content: '<li>Check the current working directory</li>',
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "&gt;&gt; mkdir ('tutorial3') <br> &gt;&gt; cd tutorial3 <br> &gt;&gt; load <br>",
										contentPosition: 'after',
										correct: "",
									},
									{
										type: 'checkbox',
										content: "&gt;&gt; newdir = 'tutorial3'; <br>  &gt;&gt; save tutorial3 <br>  &gt;&gt; load tutorial3",
										contentPosition: 'after',
										correct: "",
									},
									{
										type: 'checkbox',
										content: "&gt;&gt; mkdir('tutorial3') <br> &gt;&gt; save mkdir/file3 <br> &gt;&gt; load tutorial3/file1",
										contentPosition: 'after',
										correct: "",
									},
								]
							},
							{
								label:'',
								question:'The following commands are typed at the command prompt. There are no variables inthe workspace prior to typing these commands. What are the variables in theworkspace and their values after typing these commands?',
								details: [
									{
										viewType: 'normal',
										contentType: 'string',
										content: '&gt;&gt; a= 3<br>&gt;&gt; b = 2 <br> &gt;&gt; c = a=b;<br> &gt;&gt; d = a*c; <br> &gt;&gt; e = 4<br>&gt;&gt; f = 2*a;<br>&gt;&gt;clear b, e <br>',
									},
								],
								options: [
									{
										type: 'text',
										content: "a = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "b = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "c = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "d = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "e = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "f = ",
										contentPosition: 'before',
										correct: "",
									},
								]
							},
							{
								label:'',
								question:'The following commands are typed at the command prompt. There are no variables inthe workspace prior to typing these commands. What are the variables in theworkspace and their values after typing these commands?',
								details: [
									{
										viewType: 'normal',
										contentType: 'string',
										content: '&gt;&gt; a= 3<br>&gt;&gt; b = 2 <br> &gt;&gt; c = a=b;<br> &gt;&gt; d = a*c; <br> &gt;&gt; e = 4<br>&gt;&gt; f = 2*a;<br>&gt;&gt;clear b, e <br>',
									},
								],
								options: [
									{
										type: 'text',
										content: "a = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "b = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "c = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "d = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "e = ",
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: "f = ",
										contentPosition: 'before',
										correct: "",
									},
								]
							},
							{
								label:'',
								question:'Match the commands to their respective actions',
								details: "",
								options: [
									{
										type: 'match',
										content: [
											'a) mkdir',
											'Clear the screen',
											'<input type="text" />',
										],
										contentPosition: '',
										correct: '',
									},
									{
										type: 'text',
										content: [
											'b) clear',
											'Lsit files',
											'<input type="text" />',
										],
										contentPosition: '',
										correct: '',
									},
									{
										type: 'text',
										content: [
											'c) show',
											'Load',
											'<input type="text" />',
										],
										contentPosition: '',
										correct: '',
									},
									{
										type: 'text',
										content: [
											'd) save',
											'Make directory',
											'<input type="text" />',
										],
										contentPosition: 'before',
										correct: "",
									},
									{
										type: 'text',
										content: [
											'e) load',
											'Save files',
											'<input type="text" />',
										],
										contentPosition: 'before',
										correct: "",
									},
								]
							},
						],
                    },
                ],
            },
			{
                name: "Chapter 3",
                cid: "3",
                versions: [
                    {
                        name: "Chapter 3",
                        vid: "3.0",
                        title: "Scalar Mathmematics",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter3.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Variables: Variable names, pre-defined variables, and reserved words',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=268I_jp9qlE&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt&index=4',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/268I_jp9qlE?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Arithmetic Operations: Operators as used in scalar arithmetic and operator precedence',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=JuO0_cBMJmc&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt&index=5',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JuO0_cBMJmc?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
							{
								title: 'MATLAB Functions: Built-in mathematical function; input and output arguments',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=nMW2qGtEG1I&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt&index=6',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nMW2qGtEG1I?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch3_ex.pdf',
							},
						],
						solutions: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch3ex_key.pdf',
							},
						],
                        videos: "",
						homework: "",
						questions: [
							{
								label:'1.',
								question:'Select all options below which calculate tan(45 degree) and assigns the result to a variable x. Note: 180 degree=pi radians = 3.1415 radians.',
								details: "",
								options: [
									{
										type: 'radio',
										content: "x = tan(45)",
										contentPosition: 'after',
										correct: "true",
									},
									{
										type: 'radio',
										content: "x = tand(45) ",
										contentPosition: 'after',
										correct: "true",
									},
									{
										type: 'radio',
										content: "angle = 45 45*pi/180 x = tan(ans) ",
										contentPosition: 'after',
										correct: "false",
									},
									{
										type: 'radio',
										content: "x = tan(45*pi/180) ",
										contentPosition: 'after',
										correct: "false",
									},
								]
							},
							{
								label:'2.',
								question:'Select all options below which calculate . Assume that values for x and z exist in the workspace.',
								details: "",
								options: [
									{
										type: 'radio',
										content: "y = 2.*x.^2./4./z ",
										contentPosition: 'after',
										correct: "true",
									},
									{
										type: 'radio',
										content: "y = (2.*x.^2./(4.*z) ",
										contentPosition: 'after',
										correct: "false",
									},
									{
										type: 'radio',
										content: "y = (2.*(x.^2))./(4.*z) ",
										contentPosition: 'after',
										correct: "false",
									},
									{
										type: 'radio',
										content: "y = 2.*x.^2./(4.*z) ",
										contentPosition: 'after',
										correct: "true",
									},
								]
							},
							{
								label:'3.',
								question:'What is the value of y resulting from the following MATLAB commands:',
								details: [
									{
										viewType: 'box',
										content: 'x = 3 case = 2 y = 2.*x + case ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'radio',
										content: "Error ",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list",
									},
									{
										type: 'radio',
										content: "y = y = NaN ",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'radio',
										content: "y = 8 ",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'radio',
										content: "y = 7 ",
										contentPosition: 'after',
										correct: "false",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
								]
							},
							{
								label:'4.',
								question:'Provide a mathematical expression which is equivalent to the MATLAB expression:',
								details: [
									{
										viewType: 'box',
										content: 'z = 4.*sqrt(w)./x./y.^3 ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "1",
										hints: "Check out chapter 10.5 tutorials",
									},
								]
							},
						],
                    },
                ],
            },
			{
                name: "Chapter 4",
                cid: "4",
                versions: [
                    {
                        name: "Chapter 4",
                        vid: "4.0",
                        title: "Script Files",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter4.pdf",
							},
						],
                        lectureVideos: [
							{
								title: "Basics: Creating and executing script files; MATLAB's 'path'",
								type: 'video',
								url: 'https://www.youtube.com/watch?v=tBcq6fgzuD8&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tBcq6fgzuD8?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Commenting: Operators documenting code with non-executable statements',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=Lc3E_Tjb1YM&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Lc3E_Tjb1YM?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
							{
								title: 'Optional features: Built-in user-defined input, displaying results, formatted output',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=foTW62kyOLY&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/foTW62kyOLY?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch4_ex.pdf',
							},
						],
						solutions:[
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch4ex_key.pdf',
							},
						],
                        videos: [
							{
								title: 'Exercise 4.1',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=Ei_Yf12YNc0&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ei_Yf12YNc0?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 4.2',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=-d4sNqBVKj4&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-d4sNqBVKj4?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
						],
						homework: [
							{
								title: 'Problems',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch4_homework.pdf',
							},
							{
								title: 'Grading Rubric',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch4_hwrubric.pdf',
							},
							{
								title: 'Solutions',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch4_hwkey.pdf',
							},
						],
						questions: "",
                    },
                ],
            },
			{
                name: "Chapter 5",
                cid: "5",
                versions: [
                    {
                        name: "Chapter 5",
                        vid: "5.0",
                        title: "Arrays and array operations",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter5.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Array Creation: Array background; Creating arrays in MATLAB',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=h5npaCcdgf4&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h5npaCcdgf4?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Accessing arrays: Accessing elements of arrays (individual elements, ranges of elements)',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=fXTcTaKjS5c&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fXTcTaKjS5c?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
							{
								title: 'Array Operations: Scalar-array and array-array arithmetic',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=6ew79hC_m9s&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6ew79hC_m9s?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch5_ex.pdf',
							},
						],
						solutions: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch5ex_key.pdf',
							},
						],
                        videos: [
							{
								title: 'Exercise 5.1',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=TrzP2J1042A&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TrzP2J1042A?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 5.2',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=E8nE0vinbVI&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/E8nE0vinbVI?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
						],
						homework: [
							{
								title: 'Problems',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch5_homework.pdf',
							},
							{
								title: 'Grading Rubric',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch5_hwrubric.pdf',
							},
							{
								title: 'Solutions',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch5_hwkey.pdf',
							},
						],
						questions:"",
                    },
                    {
                        name: "Chapter 5.1",
                        vid: "5.1",
                        title: "Chapter 5.1",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'Question #1:',
								question:'Select the option below which results from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed. ',
								details: [
									{
										viewType: 'normal',
										content: '>> A = [0, 1 3; 2, 4] ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "A = [0, 13] ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = [0, 13; 2, 3] ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "Error ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = [13] ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
							{
								label:'Question #2:',
								question:'Select the option below which results from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed.',
								details: [
									{
										viewType: 'normal',
										content: '>> B = [0, 1, 2; 3, 4 5; 6 7, 8] <br> >> B(2,3) = 9',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> B = <br> 0 1 2 <br> 3 4 9 <br> 6 7 8 <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 0 1 2 <br> 3 4 5 <br> 6 7 8 <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 0 1 2 <br> 3 4 5 <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> Error <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
							{
								label:'Question #3:',
								question:'Select the option below which results from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed. ',
								details: [
									{
										viewType: 'normal',
										content: '<br> >> C = [0, 1, 2; 3, 4 5; 6 7, 8] <br> >> C(4,3) = 9 <br>',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> C = <br> 0 1 2 <br> 3 4 5 <br> 6 7 8 <br> 0 0 9 <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> C = <br> 0 1 2 <br> 3 4 5 <br> 6 7 9  <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> Error <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br>C = <br> 0 1 2 <br> 3 4 5 <br> 6 7 8 <br> 0 0 9  <br>",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
							{
								label:'Question #4:',
								question:'In Matlab syntax, create the following array: ',
								details: "",
								options: [
									{
										type: 'text',
										content: "A = ",
										contentPosition: 'before',
										correct: "",
										hints: "",
									},
								]
							},
						],
                    },
                    {
                        name: "Chapter 5.2",
                        vid: "5.2",
                        title: "Chapter 5.2",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'Question #1:',
								question:'Select the option below which results from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed.',
								details: [
									{
										viewType: 'normal',
										content: '>> A = 2:0.3:3',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.6000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.6000 2.9000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.9000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.6000 2.9000 3.1000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
							{
								label:'Question #2:',
								question:'Select the option below which results from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed.',
								details: [
									{
										viewType: 'normal',
										content: '>> A = 2:0.3:3.33',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.6000 2.9000 3.1000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.6000 2.9000 3.2000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = 2.0000 2.3000 2.5000 2.9000 3.1000 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "A = error ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
							{
								label:'Question #3:',
								question:'Select all options below which will create the array:',
								details: "",
								options: [
									{
										type: 'checkbox',
										content: ">> A = 0.1:0.3:1.2 ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: ">> A = [0.1 0.4 0.7 1.0] ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: ">> A = [0.1,0.4,0.7,1] ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "All of the above ",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
							{
								label:'Question #4:',
								question:'In Matlab syntax, write a segment to produce the following: ',
								details: [
									{
										viewType: 'normal',
										content: 'A = 2.0000 2.2000 2.4000 2.6000 2.8000 ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'textarea',
										content: "",
										contentPosition: '',
										correct: "",
										hints: "",
									},
								]
							},
						],
                    },
                    {
                        name: "Chapter 5.3",
                        vid: "5.3",
                        title: "Chapter 5.3",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'1.',
								question:'Select the value of sizeA which results from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed. ',
								details: [
									{
										viewType: 'box',
										content: '>> A = 2:0.3:3 <br> >> sizeA = size(A) ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "sizeA = [4 1]",
										contentPosition: 'after',
										correct: "false",
										hints: "var1 is not defined in the workspace.",
									},
									{
										type: 'checkbox',
										content: "Error",
										contentPosition: 'after',
										correct: "true",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "sizeA = [1 3]",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "sizeA = [3 1]",
										contentPosition: 'after',
										correct: "false",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
								]
							},
							{
								label:'2.',
								question:'Select the values of nrowB and ncolB which result from the following MATLAB commands. Assume that no variables are present in the workspace before the commands are typed.',
								details: [
									{
										viewType: 'box',
										content: '>> B = 0:0.1:1 <br> >> [nrowA, ncolA] = size(A)',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "nrowA = 10 <br> ncolA = 11",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "nrowA = 11 <br> ncolA = 11",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "nrowA = 1 <br> ncolA = 11",
										contentPosition: 'after',
										correct: "false",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "nrowA = 10 <br> ncolA = 1",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
								]
							},
							{
								label:'3.',
								question:'Select all options below which will return the total number of elements in the array D as the variable ND. Assume that no variables are present in the workspace before the commands are typed. ',
								details: [
									{
										viewType: 'box',
										content: '>> D = 0:0.2:1 ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "ND = size(D)",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "ND = numel(D)",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "ND = length(D)",
										contentPosition: 'after',
										correct: "false",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
									{
										type: 'checkbox',
										content: "ND = 6",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list",
									},
								]
							},
						],
                    },
                    {
                        name: "Chapter 5.4",
                        vid: "5.4",
                        title: "Chapter 5.4",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'1.',
								question:'Select all options below which will return the a 2X2 matrix of “ones” and assigns it to a variable named MyOnesArray.',
								details: "",
								options: [
									{
										type: 'checkbox',
										content: " >> ones(2,2) ",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: " >> MyOnesArray = [1 1; 1 1] ",
										contentPosition: 'after',
										correct: "false",
										hints: "var1 is not defined in the workspace.",
									},
									{
										type: 'checkbox',
										content: " >>MyOnesArray = ones(2,2) ",
										contentPosition: 'after',
										correct: "false",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: " >>MyOnesArray = ones(2) ",
										contentPosition: 'after',
										correct: "true",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
								]
							},
							{
								label:'2.',
								question:'Select all options below which will return a 3X4 matrix of “zeros” and assigns it to a variable named ZerosArray.',
								details: "",
								options: [
									{
										type: 'checkbox',
										content: " >> ZerosArray = [0, 0, 0, 0; 0 0 0, 0; 0, 0 0 0] ",
										contentPosition: 'after',
										correct: "false",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: " >>ZerosArray = zeros(4,3) ",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: " >> ZerosArray = zeros(3,4) ",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
									{
										type: 'checkbox',
										content: " >> Array = zeros(3,4) ",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
								]
							},
						],
                    },
                    {
                        name: "Chapter 5.5",
                        vid: "5.5",
                        title: "Chapter 5.5",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'1.',
								question:'What is b as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2; 3 4; 5 6] <br> >> b = A(2,3) ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: " b = [3 4] ",
										contentPosition: 'after',
										correct: "true",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "b = 6 ",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "b= 4 ",
										contentPosition: 'after',
										correct: "false",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "false",
										hints: "var1 is not defined in the workspace.",
									},
								]
							},
							{
								label:'2.',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2 3; 4 5 6; 7 8 9] <br> >> B = A(2:3,1:2) ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 <br> 4 5 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 2 3 <br> 4 6 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 4 5 <br> 7 8 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
								]
							},
							{
								label:'3.',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2 3; 4 5 6; 7 8 9] <br> >> B = A(:,1:2)',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 <br> 4 5 <br> 7 8 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 <br> 4 <br> 7 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 3<br> 4 5 6 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "false",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
								]
							},
						],
                    },
                    {
                        name: "Chapter 5.6",
                        vid: "5.6",
                        title: "Chapter 5.6",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'1.',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2; 3 4; 5 6] <br> >> B = [A,zeros(2,3)] ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 0 0 <br> 3 4 0 0 <br> 5 6 0 0 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 3 <br> 4 5 6 <br> 0 0 0 <br> 0 0 0 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "<br> B = 1 2 3 0 0 0 <br> 4 5 6 0 0 0 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "false",
										hints: "var1 is not defined in the workspace.",
									},
								]
							},
							{
								label:'2.',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2 3; 4 5 6] <br> >> B = [A;zeros(2,3)]',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 3 0 0 0<br> 4 5 6 0 0 0<br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 4 0 0 <br> 2 5 0 0 <br> 3 6 0 0<br>",
										contentPosition: 'after',
										correct: "false",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 3 <br> 4 5 6 <br> 0 0 0 <br> 0 0 0 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
								]
							},
							{
								label:'3.',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2 3; 4 5 6] <br> >> B = [A,zeros(2,3)]',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 4 0 0 <br> 2 5 0 0 <br> 3 6 0 0 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 3 <br> 4 5 6<br> 0 0 0 <br> 0 0 0 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "<br> B = <br> 1 2 3<br> 4 5 6<br> 0 0 0 <br> 0 0 0 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "false",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
								]
							},
						],
                    },
                    {
                        name: "Chapter 5.7",
                        vid: "5.7",
                        title: "Chapter 5.7",
                        chapter: "",
                        lectureVideos: "",
						exercises: "",
                        videos: "",
						homework: "",
						questions: [
							{
								label:'Question #1:',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2; 3 4; 5 6] <br> >> B = 3.*A ',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "error, mismatch colum ",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 3 6 <br> 9 12 <br> 15 18 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 1 2 <br> 3 4 <br> 5 6 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 3 3 <br> 3 3 <br> 3 3 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
								]
							},
							{
								label:'Question #2:',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [1 2; 3 4; 5 6] <br> >> B = A+3',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "error, mismatch colum",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 1 2 <br> 6 7 <br> 5 6 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 4 5 <br> 3 4 <br> 5 6 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 4 5 <br> 6 7 <br> 8 9 <br>",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
								]
							},
							{
								label:'Question #3:',
								question:'What is B as a result of the following commands?',
								details: [
									{
										viewType: 'box',
										content: '>> A = [4 8; 6 2; 10 4] <br> >> B = A./(2.*[2 4 3; 1 5 2])',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "error",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 8 16 <br> 12 4 <br> 20 8 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> 1 1 <br> 1 1 <br> 1 1 <br>",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "None of the above",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
								]
							},
							{
								label:'Question #4:',
								question:'Select all options below which create an array named X containing the values: sin(0), sin(45), sin(90), sin(135), sin(180).',
								details: [
									{
										viewType: 'box',
										content: '>> A = [4 8; 6 2; 10 4] <br> >> B = A./(2.*[2 4 3; 1 5 2])',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'checkbox',
										content: "<br> >>deg = [0 45 90 135 180]<br> >>X = sind(deg)<br>",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> >>sind([0 45 90 135 180])<br>",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "<br> >>0:4<br> >>sind(45.*k)<br>",
										contentPosition: 'after',
										correct: "true",
										hints: "",
									},
									{
										type: 'checkbox',
										content: "error",
										contentPosition: 'after',
										correct: "false",
										hints: "",
									},
								]
							},
							{
								label:'Question #5:',
								question:'In Matlab syntax,perform the following transformation: ',
								details: [
									{
										viewType: 'box',
										content: '<br> A = <br> 1 2 1 <br> 3 2 1 <br> 2 1 2 <br> TO: <br> B = <br> 0.5 1 0.5 <br> 1.5 1 0.5 <br> 1 0.5 1 <br>',
										contentType: 'string',
									}
								],
								options: [
									{
										type: 'textarea',
										content: "",
										contentPosition: 'after',
										correct: "",
										hints: "",
									},
								]
							},
						],
                    },
                ],
            },
			{
                name: "Chapter 6",
                cid: "6",
                versions: [
                    {
                        name: "Chapter 6",
                        vid: "6.0",
                        title: "Two Dimensional Plots",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter6.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Plotting Basics: Plot creation; figure window management; linestyles; markers; annotations; setting axes; multiple lines on a plot',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=7r9ZdMMTVLE&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7r9ZdMMTVLE?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Added Features: Additional plot types; figure windows with multiple plots; name-value arguments for plot formatting, customized annotations with special characters and Greek letters, text formatting',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=rlNlxqV6LA0&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rlNlxqV6LA0?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch6_ex.pdf',
							},
						],
						solutions: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch6ex_key.pdf',
							},
						],
                        videos: "",
						homework: [
							{
								title: 'Problems',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch6_homework.pdf',
							},
							{
								title: 'Grading Rubric',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch6_hwrubric.pdf',
							},
							{
								title: 'Solutions',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch6_hwkey.pdf',
							},
						],
						questions:"",
                    },
                ],
            },
			{
                name: "Chapter 7",
                cid: "7",
                versions: [
                    {
                        name: "Chapter 7",
                        vid: "7.0",
                        title: "Data Import and Export",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter7.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Import/Export Functions; Special purpose data import and export: xlsread, csvread, csvwrite, etc.',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=Dd_SjXBmeLw&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Dd_SjXBmeLw?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Low Level File I/O: Arbitrary binary/text file import/output.',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=Mz_jl6LfT0U&list=UUYnjJev4uFmdlL90qQU5NWQ',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mz_jl6LfT0U?ecver=1" frameborder="0" allowfullscreen></iframe>',							
							},
						],
						exercises: "",
						solutions: "",
                        videos: "",
						homework: "",
						questions: "",
                    },
                ],
            },
			{
                name: "Chapter 8",
                cid: "8",
                versions: [
                    {
                        name: "Chapter 8",
                        vid: "8.0",
                        title: "User Defined Functions",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter8.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Creating and executing function files',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=AmKyQMyJ-_A',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AmKyQMyJ-_A?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch8_ex.pdf',
							},
						],
						solutions: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch8ex_key.pdf',
							},
						],
                        videos: [
							{
								title: 'Exercise 8.1',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=KCWbKcaiTyw&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KCWbKcaiTyw?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 8.2',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=nAFBMi07LvI&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nAFBMi07LvI?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 8.3',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=dvdAwL6PoKM&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dvdAwL6PoKM?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 8.4',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=tvxfgSDXK-k&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tvxfgSDXK-k?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
						],
						homework: [
							{
								title: 'Problems',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch8_homework.pdf',
							},
							{
								title: 'Grading Rubric',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch8_hwrubric.pdf',
							},
							{
								title: 'Solutions',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch8_hwkey.pdf',
							},
						],
						questions: [
							{
								label:'Q1.',
								question:'The code shown below is saved in the current working directory with the file name fun2.m.',
								details: [
									{
										viewType: 'box',
										content: 'function [y] = fun2(var1) <br> var2 = 2.*var1 + 1; <br> y = var1 + var2;  ',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'The following commands are typed at the command prompt (you may assume that no other variables are defined in the MATLAB workspace prior to typing the commands below): ',
										contentType: 'string'
									},
									{
										viewType: 'box',
										content: '>>var2 = 2; <br> >>out = fun2(var2); <br> >> y = out + var1;',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'What is y resulting from the above commands? If an error results from the above commands, briefly explain the source of the error.',
										contentType: 'string'
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "Error, argument names sent to function are inconsistent, it’s var1 in function, var2 in workspace.",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "9",
										contentPosition: 'after',
										correct: "0",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "12",
										contentPosition: 'after',
										correct: "0",
										hints: "function doesn’t affect value of var1 in the workspace",
									},
									{
										type: 'checkbox',
										content: "Error; argument names returned from function are not consistent since y not same as out.",
										contentPosition: 'after',
										correct: "0",
										hints: "var1 is not defined in the workspace.",
									},
									{
										type: 'checkbox',
										content: "Error;",
										contentPosition: 'after',
										correct: "1",
										hints: "names don’t matter, it’s the order in the list.",
									},
								]
							},
							{
								label:'Q2.',
								question:'The code shown below is saved in the current working directory with the file name fun.m. ',
								details: [
									{
										viewType: 'box',
										content: 'function [y] = fun1(in1,in2) <br> y = in1.^2 - in2; ',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'The following commands are typed at the command prompt (you may assume that no other variables are defined in the MATLAB workspace prior to typing the commands below): ',
										contentType: 'string'
									},
									{
										viewType: 'box',
										content: 'x = [0; 2; 4]; <br> in2 = 3; <br> out = fun1(in2,x(2)); ',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'What is out resulting from the above commands? If an error results from the above commands, briefly explain the source of the error.',
										contentType: 'string'
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "Error, argument names sent to function are inconsistent. ",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "Error, the output variable names returned from the function are inconsistent.",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "out = [9;7;5]",
										contentPosition: 'after',
										correct: "0",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "out = 7",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
								]
							},
							{
								label:'Q3.',
								question:'The code shown below is saved in the current working directory with the file name fun2.m.',
								details: [
									{
										viewType: 'box',
										content: 'function y = myfunction(x) <br> y = 3.*x + var;',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'The following commands are typed at the command prompt: ',
										contentType: 'string'
									},
									{
										viewType: 'box',
										content: '>> var = 3; <br> >> x = 2; <br> >> var2 = myfun(var); ',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'What is var2 resulting from the above commands? If an error results from the above commands, briefly explain the source of the error.',
										contentType: 'string'
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "Error, argument names sent to function are inconsistent.",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list",
									},
									{
										type: 'checkbox',
										content: "Error, the output variable names returned from the function are inconsistent.",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "Error, the function name is not the same as the file name.",
										contentPosition: 'after',
										correct: "0",
										hints: "only the second element of x is sent to the function.",
									},
									{
										type: 'checkbox',
										content: "var2 = 9",
										contentPosition: 'after',
										correct: "0",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
									{
										type: 'checkbox',
										content: "var2 = 12",
										contentPosition: 'after',
										correct: "0",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
									{
										type: 'checkbox',
										content: "Error, the variable var is not defined in the function workspace.",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									}
								]
							},
							{
								label:'Q4.',
								question:'The code shown below is saved in the current working directory with the file name fun2.m. ',
								details: [
									{
										viewType: 'box',
										content: 'function y = myfunction(x) <br> y = 3.*x + var; ',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'The following commands are typed at the command prompt: ',
										contentType: 'string'
									},
									{
										viewType: 'box',
										content: '>> var = 3; <br> >> x = 2; <br> >> var2 = myfunction(var); ',
										contentType: 'string',
									},
									{
										viewType: 'normal',
										content: 'What is var2 resulting from the above commands? If an error results from the above commands, briefly explain the source of the error.',
										contentType: 'string'
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "Error, argument names sent to function are inconsistent.",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list",
									},
									{
										type: 'checkbox',
										content: "Error, the output variable names returned from the function are inconsistent.",
										contentPosition: 'after',
										correct: "0",
										hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "Error, the function name is not the same as the file name.",
										contentPosition: 'after',
										correct: "0",
										hints: "It is good practice to make the names match, but not required.  MATLAB will use the FILE name",
									},
									{
										type: 'checkbox',
										content: "var2 = 9",
										contentPosition: 'after',
										correct: "0",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
									{
										type: 'checkbox',
										content: "var2 = 12",
										contentPosition: 'after',
										correct: "0",
										hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.",
									},
									{
										type: 'checkbox',
										content: "Error, the variable var is not defined in the function workspace.",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									}
								]
							},
							{
								label:'Q5.',
								question:'What is num resulting from the code below?',
								details: [
									{
										viewType: 'box',
										content: 'A = [4 -2 5; 3 7 -6] <br> num = A(1,1); <br> for m = 1:2 <br> &nbsp; for n = 1:3 <br> &nbsp;&nbsp; if A(m,n) > num <br> &nbsp;&nbsp;&nbsp; num = A(m,n) <br> &nbsp;&nbsp; end <br> &nbsp; end <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'checkbox',
										content: "num = [<br>\n4 4 5 <br>4 7 4 <br> ]",
										contentPosition: 'after',
										correct: "0",
										hints: "num isn’t defined as an array",
									},
									{
										type: 'checkbox',
										content: "num = [5  7]",
										contentPosition: 'after',
										correct: "0",
										hints: "num is not defined as an array",
									},
									{
										type: 'checkbox',
										content: "num = [0  0  5  0  7  0] ",
										contentPosition: 'after',
										correct: "0",
										hints: "num not defined as array", hints: "names don’t matter, it’s the order in the list.",
									},
									{
										type: 'checkbox',
										content: "num = 5",
										contentPosition: 'after',
										correct: "0",
										hints: "TRUE if statement doesn’t terminate FOR loop",
									},
									{
										type: 'checkbox',
										content: "num = 7",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									}
								]
							},
						],
                    },
                ],
            },
			{
                name: "Chapter 9",
                cid: "9",
                versions: [
                    {
                        name: "Chapter 9",
                        vid: "9.0",
                        title: "Decision Making and Flow Control",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter9.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'Operators: Relational Operators: <, >, <=, >=, ~=, ==. Logical Operators: &, |, ~.',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=Zx4AvSOA6a8&index=7&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Zx4AvSOA6a8?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Logical Arrays: Arrays of logical values, using logical arrays as array indices, the FIND command.',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=loO8paKypI8&index=8&list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/loO8paKypI8?list=PLTwPa5Tfu7AULpYLzEGS5c2SFyuD5sOFt?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'IF-ELSE-END Constructions: Using IF blocks for flow control',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=cXnDN-Hl6Mc',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cXnDN-Hl6Mc?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch9_ex.pdf',
							},
						],
						solutions: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch9ex_key.pdf',
							},
						],
                        videos: [
							{
								title: 'Exercise 9.1',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=Fw4J3cXksxY&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fw4J3cXksxY?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 9.2',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=nAEdMEwtgjc&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nAEdMEwtgjc?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 9.3',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=ZfD9hrmIBOc&feature=youtu.be',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZfD9hrmIBOc?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
						],
						homework: [
							{
								title: 'Problems',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch9_homework.pdf',
							},
							{
								title: 'Grading Rubric',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch9_hwrubric.pdf',
							},
							{
								title: 'Solutions',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch9_hwkey.pdf',
							},
						],
						questions: [
							{
								label:'1.',
								question:'What is junk as a result of the given Matlab code fragment?',
								details: [
									{
										viewType: 'box',
										content: 'junk = 3&pi',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "0",
										contentPosition: 'after',
										correct: "0",
										hints: "AND is TRUE if both arguments are TRUE.  Non-zero values are interpreted as TRUE",
									},
									{
										type: 'radio',
										content: "1",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
									{
										type: 'radio',
										content: "None of the above ",
										contentPosition: 'after',
										correct: "0",
										hints: "output of a relational operator is either TRUE or FALSE",
									},
								],
							},
							{
								label:'2.',
								question:'Calculate the result of the given Matlab code fragment if the variables have the following values:',
								details: [
									{
										viewType: 'box',
										content: 'a = 8; b = 2; c = 4; d = 3; e = 1; <br> x = 1; <br> if (a<=b | b+c < e) <br> &nbsp; x = 2; <br> elseif b< c & c>d <br> &nbsp; x = 1; <br> elseif d>=e <br> &nbsp; x = 0; <br> else <br> &nbsp; x = -1; <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 9 tutorials",
									},
								],
							},
							{
								label:'3.',
								question:'What is junk as a result of the given Matlab code fragment? ',
								details: [
									{
										viewType: 'box',
										content: 'junk = 3|0',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "0",
										contentPosition: 'after',
										correct: "0",
										hints: "OR is TRUE if either argument is TRUE.  Non-zero values are interpreted as TRUE",
									},
									{
										type: 'radio',
										content: "1",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
									{
										type: 'radio',
										content: "None of the above ",
										contentPosition: 'after',
										correct: "0",
										hints: "output of a relational operator is either TRUE or FALSE",
									},
								],
							},
							{
								label:'4.',
								question:'What value does the variable x have as the result of the given Matlab code fragment? ',
								details: [
									{
										viewType: 'box',
										content: 'a = 6; b = 3; c = 1; d = 3; e = -4; <br> x = 1; <br> if (a<=b & c< d) <br> &nbsp; x = 3; <br> elseif b< c | c< d <br> &nbsp; x = 1; <br> elseif d>=c <br> &nbsp; x = 2; <br> else <br> &nbsp; x = 0; <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 9 tutorials",
									},
								],
							},
							{
								label:'5.',
								question:'What is junk as a result of the given Matlab code fragment? ',
								details: [
									{
										viewType: 'box',
										content: 'junk = 3<2<4',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "0",
										contentPosition: 'after',
										correct: "0",
										hints: "Relational operators are all equal precedence and are evaluated left-to-right",
									},
									{
										type: 'radio',
										content: "1",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
									{
										type: 'radio',
										content: "None of the above ",
										contentPosition: 'after',
										correct: "0",
										hints: "output of a relational operator is either TRUE or FALSE",
									},
								],
							},
							{
								label:'6.',
								question:'What value does the variable y have as the result of the given Matlab code fragment?',
								details: [
									{
										viewType: 'box',
										content: 'x = 3; <br> if x< 0 <br> &nbsp; y = 0; <br> elseif 0<=x & x< 2 <br> &nbsp; y = x.^2; <br> elseif x>=2 & x <=3 <br> &nbsp; y = 2.*x + 1; <br> else <br> &nbsp; y = 4; <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 9 tutorials",
									},
								],
							},
							{
								label:'7.',
								question:'What is junk resulting from the code below?',
								details: [
									{
										viewType: 'box',
										content: 'junk = 0.1<0.2<0.5',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "1",
										contentPosition: 'after',
										correct: "0",
										hints: "Relational operators are all equal precedence and are evaluated left-to-right",
									},
									{
										type: 'radio',
										content: "0",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
									{
										type: 'radio',
										content: "None of the above ",
										contentPosition: 'after',
										correct: "0",
										hints: "output of a relational operator is either TRUE or FALSE",
									},
								],
							},
							{
								label:'8.',
								question:'What value does the variable y have as the result of the given Matlab code fragment?',
								details: [
									{
										viewType: 'box',
										content: 'x = 3; <br> if 0 < x < 2 <br> &nbsp; y = 4; <br> else <br> &nbsp; y = 2; <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 9 tutorials",
									},
								],
							},
						],
                    },
                ],
            },
			{
                name: "Chapter 10",
                cid: "10",
                versions: [
                    {
                        name: "Chapter 10",
                        vid: "10.0",
                        title: "Looping Structures",
                        chapter: [
                        	{
                        		type: "pdf",
								url: "http://personal.palouse.net/thanshaw/Programming/text/chapter10.pdf",
							},
						],
                        lectureVideos: [
							{
								title: 'For Loops: Repeating calculations a specified number of times',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=iRT_rC-0Wp8',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iRT_rC-0Wp8?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'While Loops: Conditional terminating repeated calculations',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=VSneSrrKBKw',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VSneSrrKBKw?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
							{
								title: 'Efficiency: Improving speed of looping structures',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=3gICldb2Z7w',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gICldb2Z7w?ecver=1" frameborder="0" allowfullscreen></iframe>',						
							},
						],
						exercises: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch10_ex.pdf',
							},
						],
						solutions: [
							{
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/exercises/ch10ex_key.pdf',
							},
						],
                        videos: [
							{
								title: 'Exercise 10.1',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=EujvKQsy-2g',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EujvKQsy-2g?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 10.2',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=1PPuohcqQ9Q',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1PPuohcqQ9Q?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 10.3',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=KcCbVHAOTRE',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KcCbVHAOTRE?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 10.4',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=FnKoOBd1Mz4',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FnKoOBd1Mz4?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 10.9',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=WWnitEYnGGE',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WWnitEYnGGE?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
							{
								title: 'Exercise 10.10',
								type: 'video',
								url: 'https://www.youtube.com/watch?v=2-TNIBbsU84',
								iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2-TNIBbsU84?ecver=1" frameborder="0" allowfullscreen></iframe>',
							},
						],
						homework: [
							{
								title: 'Problems',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch10_homework.pdf',
							},
							{
								title: 'Grading Rubric',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch10_hwrubric.pdf',
							},
							{
								title: 'Solutions',
								type: 'pdf',
								url: 'http://personal.palouse.net/thanshaw/Programming/homework/ch10_hwkey.pdf',
							},
						],
						questions: [
							{
								label:'1.',
								question:'What is junk as a result of the given Matlab code fragment? ',
								details: [
									{
										viewType: 'box',
										content: 'a = [0 1 2]; <br> b = [3 -1 2]; <br> &nbsp; junk = 0; <br> for k = 1:3 <br> &nbsp; junk = junk + a(4-k).*b(k); <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "[0 6 5]",
										contentPosition: 'after',
										correct: "0",
										hints: "junk is not defined as an array",
									},
									{
										type: 'radio',
										content: "[6 -1 0]",
										contentPosition: 'after',
										correct: "0",
										hints: "junk not defined as array; there is a cumulative sum",
									},
									{
										type: 'radio',
										content: "5",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
									{
										type: 'radio',
										content: "0",
										contentPosition: 'after',
										correct: "0",
										hints: "cumulative sum",
									},
								],
							},
							{
								label:'2.',
								question:'What is stuff as a result of the MATLAB code fragment below? ',
								details: [
									{
										viewType: 'box',
										content: 'a = [0 -1 1 4 3 -3 2]; <br> b = [3 -1 2]; <br> stuff = 0; <br> for k = 1:3 <br> &nbsp; stuff = stuff + a(2*k).*b(4-k); <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 10 tutorials",
									},
								],
							},
							{
								label:'3.',
								question:'What is count as a result of the given Matlab code fragment? ',
								details: [
									{
										viewType: 'box',
										content: 'x = [-6 -2 5 0 -3]; <br> count = 0; <br> for index = 1: length(x) <br> &nbsp; if x(index) >= 0 <br> &nbsp;&nbsp; count = count + 1; <br> &nbsp; end <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "0",
										contentPosition: 'after',
										correct: "0",
										hints: 'complete the for loop; it isn’t terminated by the first false "if"',
									},
									{
										type: 'radio',
										content: "1",
										contentPosition: 'after',
										correct: "0",
										hints: "count not created as array.",
									},
									{
										type: 'radio',
										content: "[0 1 2]",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
									{
										type: 'radio',
										content: "3",
										contentPosition: 'after',
										correct: "0",
										hints: "count not created as array.",
									},
								],
							},
							{
								label:'4.',
								question:'What is count as a result of the MATLAB code fragment below? ',
								details: [
									{
										viewType: 'box',
										content: 'x = [1 -2 3]; <br> count = 0; <br> for index = 1: length(x) <br> &nbsp; for k = 1:3 <br> &nbsp;&nbsp; count = count + x(index)*k; <br> &nbsp; end <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 10 tutorials",
									},
								],
							},
							{
								label:'5.',
								question:'What is var1 as a result of the given Matlab code fragment? ',
								details: [
									{
										viewType: 'box',
										content: 'x = [7 13 11 3 5]; <br> y = 0:7; <br> for index = 1:2:length(x) <br> &nbsp; var1(index) = x(index) + y(index+1); <br> end <br> var2 = var1(3) + 2;',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "16",
										contentPosition: 'after',
										correct: "0",
										hints: "var1 is asked for, not var2",
									},
									{
										type: 'radio',
										content: "[8 14 10]",
										contentPosition: 'after',
										correct: "0",
										hints: "unspecified array locations are filled with zeros",
									},
									{
										type: 'radio',
										content: "[8 15 14 7 10]",
										contentPosition: 'after',
										correct: "0",
										hints: "index variable increments by 2s",
									},
									{
										type: 'radio',
										content: "[8 0 14 0 10]",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},									
								],
							},
							{
								label:'6.',
								question:'What is count as a result of the MATLAB code fragment below?',
								details: [
									{
										viewType: 'box',
										content: 'a = [3 2 1 0 -1 -2] <br> for k = 1:length(a) <br> &nbsp; if a(k) <= -1 <br> &nbsp;&nbsp; break <br> &nbsp; end <br> &nbsp; count = a(k) + k; <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 10 tutorials",
									},
								],
							},
							{
								label:'7.',
								question:'What is num resulting from the code below? ',
								details: [
									{
										viewType: 'box',
										content: 'A = [4 -2 5; 3 7 -6] <br> num = A(1,1); <br> for m = 1:2 <br> &nbsp; for n = 1:3 <br> &nbsp;&nbsp; if A(m,n) > num <br> &nbsp;&nbsp;&nbsp num = A(m,n) <br> &nbsp;&nbsp; end <br> &nbsp; end <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'radio',
										content: "[5 7]",
										contentPosition: 'after',
										correct: "0",
										hints: "num isn’t defined as an array",
									},
									{
										type: 'radio',
										content: "[0 0 5 0 7 0]",
										contentPosition: 'after',
										correct: "0",
										hints: "num is not defined as an array",
									},
									{
										type: 'radio',
										content: "[7]",
										contentPosition: 'after',
										correct: "1",
										hints: "",
									},
								],
							},
							{
								label:'8.',
								question:'What is z after the code below executes?',
								details: [
									{
										viewType: 'box',
										content: 'var = [-3 4 -4 5 0 -2 6 1 4 8]; <br> x = 5; <br> index = 1; <br> while x>2 <br> &nbsp; z(index) = var(2*x); <br> &nbsp; index = index + 2; <br> &nbsp; x = x - 1; <br> end <br> z(2+index) = 1;',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 10 tutorials",
									},
								],
							},
							{
								label:'9.',
								question:'What is count after the code below executes?',
								details: [
									{
										viewType: 'box',
										content: 'n = [0 2 1 -2 -1 3 -3]; <br> count = 0; <br> index = 1; <br> while n(index) < 3 <br> &nbsp; count = 2*n(index); <br> ensp;index = index +1; <br> end',
										contentType: 'string',
									},
								],
								options: [
									{
										type: 'text',
										content: "",
										contentPosition: '',
										correct: "10",
										hints: "Check out chapter 10 tutorials",
									},
								],
							},
						],
                    },
                ],
            },
            // add more units here... see https://ee.hvullc.com/api/class for real example
        ]
    })
}

export function getQuestion({ type, id }, cb) {
    return Vue.http.get(`/api/${type}/${id}`)
        .then(question => cb(question.data))
}

export function verifyQuestion({ type, answer }, cb) {
    return Vue.http.post(`/api/${type}`, answer)
        .then(res => cb(res.data, res.ok))
}
