Start with index.html
Profile page of students, faculty, alumni has been made for all those people about whom sufficient information was available, to view click on the name on the card of the respective person, and at bottom of that card, there is a profile and mail button, clicking on profile redirects to the corresponding person's personal website.
The card is made for everyone associated with SERC(faculty, student, alumni) and can be seen in the "People" tab.
Admin mode can be found in the Focused Area tab.
In admin mode, you can edit the text, by clicking on the "Enter admin mode" button and then clicking on the paragraph you want to edit.
you can leave admin mode by clicking the "leave admin mode" button, on leaving it you cannot edit the text, but the previously edited text will be retained even after refreshing the page or closing the tab and reopening it.
Twitter linked in Handle can be found in the "about and contacts page" and also on the home page"index.html" in one of the cards.
The contact forms is just for the structural representation of how things will be in the actual website, I could have made it functional, but then I would have need support of PHP, which I can do, but running it and testing it on any desktop will require LAMP or XAMPP installed on the desktop of TA, that may not be the case, so I have left it as it is.
Publications are fetched dynamically and are it person wise and Year wise sorted, and it is fetched from DBLP web site, using AJAX, Jquery.
The news and updates horizontal scroll can be found at the bottom of the Home(index.html) page & has content "More details of the course are available at https://serc.iiit.ac.in/aisc" more could be added but the page itself is used to display all news & updates so the content added in horizontal scroll is less ( to avoid redundancy of information & keep things simple)
& obviously the page itself has news & updates.
As of now, there is no authentication required to enter admin mode but to enter admin mode where you can edit the accessibility of a page for a user, there you will need a password, and it is "admin".
Assumption "Focused area" and "center" (i.e. about research center) has the same role, so renamed Center as focused area
i.e. you can read about "About the Center" in the "About & contacts page", and you can read about "Focus Area" & "about center" on page "Focused area", not since admin mode is added on this page you can add more contents there also.
your browser has to support web storage in order to use admin mode
Instruction to use advance admin mode:
open "admin_mode.html", you will be asked a password"enter admin", 
now press the button"Enable mode"
now you can revoke user access from "contents from About the Center, Focus Area, Student/Faculty/Alumni, Resources and Contact, Publications, News/Updates", by clicking on the button "revoke access", and you will get an alert mess regarding that, now if you will try to open any other webpage, you will get a message, that admin has disallowed people to access this page, now "grant access" key will be available, you can click it to revert changes to what they were, 
Note: this change is preserved, even if you, refresh the page, close and reopen the tab, or close the browser & reopen it, they still will be there.
note when we revoke access to a web page, the "people" page, i.e. student, alumni, faculty is affected, but the individual profile page of people (for example: "./SaiAnirudhKarre.html") is unaffected, just to show how admin can include or exclude a page under its control, to include any page under admin's control just add one line "<script type='text/javascript' src="./js/admin_control.js"></script>" at the end of html code, and now the page will be under the control of admin.
page.html has no role, kindly ignore it
In publication page, we can get the publications of Professors sorted year wise and grouped by professor, i.e. you can click on the person's name to get their publications dynamically yearwise sorted.
IMP Note, there are Three admin mode methods, one to edit texts and retain them persistently on the same desktop, and another admin mode is for Access control to pages.
Also Note, There is 3rd type of admin mode which is applied in almost every page, It allows user to edit the content of webpage by clicking on "Edit Page" and then process to whatever editing possible and click on "Stop Editing" to prevent any further editing, but there is drawback to this feature that it is not persistent.


Profile page has been made for(serc Website had sufficient information about them):
├── AmarBanerjee.html
├── AkashAgrawall.html
├── Kesav_V_Nori.html
├── KirtiGarg.html
├── LalitMohan.html
├── Naveen_N_Kulkarni.html
├── NeerajMathur.html
├── RaghuReddy.html
├── RameshLoganathan.html
├── SaiAnirudhKarre.html
├── SaiGollapudi.html
├── ShivamKhandelwal.html
├── ShriyanshAgrawal.html
├── SridharChimalakonda.html
├── VasudevaVarma.html
└── VenkateshChoppella.html





.
├── about.html
├── admin_mode.html
├── AkashAgrawall.html
├── alumni.html
├── AmarBanerjee.html
├── blog.html
├── css
│   ├── font-awesome.min.css
│   ├── icomoon.css
│   ├── images
│   │   ├── author.png
│   │   └── posterity.png
│   ├── lg-transitions.min.css
│   ├── lightgallery.min.css
│   ├── style_2.css
│   ├── style_3.css
│   ├── style_4.css
│   ├── style_5.css
│   ├── style_6.css
│   └── style.css
├── docs
│   ├── 1.pdf
│   └── 2.pdf
├── faculty.html
├── fonts
│   ├── a13-icomoon.svg
│   ├── a13-icomoon.ttf
│   ├── a13-icomoon.woff
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   ├── fontawesome-webfont.woff2
│   ├── lg1.eot
│   ├── lg.eot
│   ├── lg.svg
│   ├── lg.ttf
│   └── lg.woff
├── home.html
├── img
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   ├── 5.jpg
│   ├── 6.jfif
│   ├── 6.jpg
│   ├── Abhay_Mehtre.jpeg
│   ├── Abhinav_Gupta.jpeg
│   ├── Akash_Agrawall.jpg
│   ├── Amar_Banerjee.jpg
│   ├── Animesh_Pathak.jpg
│   ├── Anukul_Sangwan.jpg
│   ├── Dhiraj_Shanmukha_Mitra_V.jpeg
│   ├── Dontineni_Ganesh_Sai.jpeg
│   ├── Kirti_Garg.jpg
│   ├── Kushal_Singh.jpg
│   ├── Lalit_Mohan.jpg
│   ├── loading.gif
│   ├── Mohit_Kuri.jpg
│   ├── Mrutunjay.jpg
│   ├── Naveen_N_Kulkarni.jpeg
│   ├── Neeraj_Mathur.jpg
│   ├── no_image.png
│   ├── padma_nistala.jpg
│   ├── Palash_Agarwal.jpg
│   ├── Raghav.jpg
│   ├── Sai_Anirudh_Karre.jpg
│   ├── Sai_Gollapudi.jpg
│   ├── Sai_Krishna.jpg
│   ├── Sai_Raju_Ram_Chander_Chikkala.jpeg
│   ├── Shivam_Khandelwal.jpg
│   ├── Shivang_Shekhar.jpg
│   ├── Shridar_Chimalakonda.jpg
│   ├── Shriyansh_Agrawal.jpeg
│   ├── Siddharth_Bhatore.png
│   ├── Soujanya_Ponnapalli.jpg
│   ├── Soumya.jpeg
│   ├── Sourav_Sarangi.jpg
│   ├── video-play.png
│   ├── vimeo-play.png
│   ├── Vivek_Iyer.jpg
│   └── youtube-play.png
├── index.html
├── js
│   ├── admin_control.js
│   ├── admin_mode.js
│   ├── script_1.js
│   ├── script_2.js
│   ├── script_3.js
│   ├── script_5.js
│   └── script_getPub.js
├── Kesav_V_Nori.html
├── KirtiGarg.html
├── LalitMohan.html
├── Naveen_N_Kulkarni.html
├── NeerajMathur.html
├── page.html
├── publication.html
├── RaghuReddy.html
├── RameshLoganathan.html
├── Readme.md
├── SaiAnirudhKarre.html
├── SaiGollapudi.html
├── ShivamKhandelwal.html
├── ShriyanshAgrawal.html
├── SridharChimalakonda.html
├── student.html
├── VasudevaVarma.html
└── VenkateshChoppella.html

