#1. Ran npx create-next-app. Removed filler from initial file tree. Installed and successfully tested TailwindsCSS.

#2. Created components folder. Created jsconfig.json. Set the compilerOptions with the baseUrl where I specified aliases, paths, to my project folders for pages, styles, and components folders. Updated _app.js styles file path.

#3. Created data folder inside of components folder. Created data.jsx inside of data. Created Navbar.jsx inside of components folder. Created ui folder inside of components folder. Moved Navbar.jsx inside of ui folder. Added generic links into data.jsx. Added generic logo using created favicon, displayed to tab.

#4. Downloaded npm install react-icons --save. Created socials data, imported react icon for each link. Added title to index.js in root using imported Head. Setup skelaton for Navbar component.

#5. Worked on building out the Navbar component. Added custom config to tailwind.config.js for smaller screens.

#6. Continued building out Navbar, specifically the links and mobile responsiveness. Created _document.js file and imported a Google Fonts type by adding an extension to the tailwind.config.js file. Brought in dark color scheme.

#7. Continued working on Navbar component. Set up toggle button functionality. Mapped over social and links arrays. Set up dynamic menu height for future changes using two useRef hooks and a useEffect hook inside of Navbar.jsx. Switched back due to bg styling issues. Added social icons to mobile menu. Navbar finished.

#8. Created images folder inside of public folder. Created Hero.jsx inside of components/ui, added path to index file. Added new font. Started working on Hero layout for mobile screen size. Finished for mobile.

#9. Created Main.jsx inside of components folder. Started setting up Main component. Updated next.confis.js to allow image imports from cloudinary. Finished Main component using grid-layout.

#10. Created Info.jsx file inside of components folder. Started setting up Info component. Updated index.jsx inside of components folder. Finished Info component.

#11. Created Example.jsx. Updated index.jsx. Started setting up Example component. Finished Example component.

#12. Created Features.jsx inside of components/ui folder. Began setting up Features component. Finished Features component.

#13. Created Benefits.jsx inside utils/components folder. Began setting up Benefits component. Finished setting up Benefits component.

#14. Created Subscribe.jsx inside of ui/components folder. Started setting up Subscribe component. Finished Subscribe component.

#15. Created Call2Action.jsx inside of ui/components folder. Started setting up Call2Action component. Finished Call2Action component.

#16. Created Footer.jsx inside of ui/components folder. Started setting up Footer component. Finished Footer component. Home page complete.

#17. Made the Home page responsive for all relevant screen sizes up to 768.

#18. Made the Home page responsive for all relevant screen sizes up to 1280. Home screen responsive styling finished.

#19. Created common folder. Created subscriptions.jsx. Created info.jsx, both inside of the public folder. Created common folder inside of the components folder for reusable components. Created footer and navbar folders inside of common folder. Moved the file location of the Footer.jsx and Navbar.jsx componnts from components/ui folder into components/common folder. Created index.js inside of common folder to act as main export file for the common folder components. Made everything working as before.

#20. Created hero folder inside common folder. Moved Hero.jsx from ui folder to hero folder. Updated paths, make to work as before. Created breadcrumbs folder. Created inside of components web3 folder. Inside of web3 folder created ftmprice and walletbar folders. Inside of ftmPrice created FtmPrice.jsx. Inside of walletbar created Walletbar.jsx. Created breadcrumbs.jsx inside of breadcrumbs. Created index.js inside of web3 folder to use for export defaults. Created order folder insode of components folder. Created card folder inside order. Created index.js inside of order. 

#21. Created sales folder inside components. Created list folder inside. Created index.js inside for defaults. Created keypoints folder inside of order folder. Created KeyPoints.jsx file. Created modal folder inside of common folder. Created Modal.jsx inside of modal.