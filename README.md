#1. Ran npx create-next-app. Removed filler from initial file tree. Installed and successfully tested TailwindsCSS.

#2. Created components folder. Created jsconfig.json. Set the compilerOptions with the baseUrl where I specified aliases, paths, to my project folders for pages, styles, and components folders. Updated _app.js styles file path.

#3. Created data folder inside of components folder. Created data.jsx inside of data. Created Navbar.jsx inside of components folder. Created ui folder inside of components folder. Moved Navbar.jsx inside of ui folder. Added generic links into data.jsx. Added generic logo using created favicon, displayed to tab.

#4. Downloaded npm install react-icons --save. Created socials data, imported react icon for each link. Added title to index.js in root using imported Head. Setup skelaton for Navbar component.

#5. Worked on building out the Navbar component. Added custom config to tailwind.config.js for smaller screens.

#6. Continued building out Navbar, specifically the links and mobile responsiveness. Created _document.js file and imported a Google Fonts type by adding an extension to the tailwind.config.js file. Brought in dark color scheme.

#7. Continued working on Navbar component. Set up toggle button functionality. Mapped over social and links arrays. Set up dynamic menu height for future changes using two useRef hooks and a useEffect hook inside of Navbar.jsx. Switched back due to bg styling issues. Added social icons to mobile menu. Navbar finished.

#8. Created images folder inside of public folder. Created Hero.jsx inside of components/ui, added path to index file. Added new font. Started working on Hero layout for mobile screen size. Finished for mobile.

#9. Created Main.jsx inside of components folder. Started setting up Main component. Updated next.confis.js to allow image imports from cloudinary. Finished Main component using grid-layout.