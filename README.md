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

#22. Created BaseLayout to attach Navbar and Footer to all pages instead of using imports method. Created layout folder in components. Created base inside layout. Created BaseLayout inside base folder. Created index.js inside of baseLayout. Created BaseLAyout component. Applied BaseLayout to all pages. Made working as before.

#23. Created content folder in the root directory. Created subscriptions folder inside of content. Created index.json and fetcher.js inside of subscriptions. Populated index.json with test data for use in development. Created getAllCourse function inside of fetcher.js.

#24. Updated jsconfig.json file to path to content folder. Created getStaticProps() for data fetching inside of services.jsx. Displayed JSON data to UI. Passes fetched data via SalesCard into its component. Mapped over data and iterated one sales card per each object in the array.

#25. Worked on SalesCard component. Updated nextjs.config file to allow outside images via the domain path.

#26. Created offerings folder inside of pages. Created [ slug ].js file to create multiple dynamic routing according to data slug. Deleted services.jsx. Added < Head> and meta tag in [slug ].js to prevent screen clipping on mx.

#27. Created getStaticPaths to tell NextJS app how many pages to create during build time. Created getStaticProps. Both inside [ slug].js file. Passed props into Banner.jsx component to render data to UI for each page.

#28. Passed props into KeyPoints.jsx component and used to render data to UI dynamically. Added dynamic classes to the status section to display Locked/Unlocked according to locked property.

#29. Moved common, layout, order, sales and web3 folders to ui folder. Updated routes. Made all working. Created providers folder inside of components. Created folder called web3 inside of providers. Created index.js inside of web3.

#30. Set up createContext inside of web3/index.jsx for web3 to pass it around the app. Wrapped the app inside the new Web3Provider using the BaseLayout.

#31. Remade the BaseLayout as a property on the component. Used inside of _app.js to wrap the app to pass props to all pages as needed - earlier method was resulting in null because provider was wrapped around content only and not the page. Now it wraps the page entire. Tested useContext (useWeb3) to pass value to another page, successful.

#32. Set up Web3Provider and created instance of web3. Installed npm i web3 and npm i @metamask/detect-provider. Tested for web3, successful.

#33. Created _web3Api with useMemo to add changes to web3Ap after its initial load.

#34. Created isWeb3Loaded property in _web3Api. Passed web3 props into Hero.jsx. Set up connect wallet button to open metamask on click. Conditionally rendered connect button depending on if web3provider is loaded/web3 present or not.

#35. Created button folder inside of common folder. Created Button.jsx. Created Button component. C&p buttons from Hero into Button.jsx. Set up Button component and replaced old buttons with it. Edited isWeb3Loaded property from _web3Api. Added double ternary to Hero to add more conditional rendering to the connect button.

#36. Set up a disable property on the button to disallow interaction during loading and when the account is already connected to MetaMask. Extended tailwing.config.js to allow disable property to be hovered. Added disabled property to connect button during Loading. 

#37. Created hooks folder inside web3 folder. Created setupAccount.jsx inside. Started working on setupAccount function. Created setupHooks.jsx. Set up setupHooks function. Added hooks property on _web3Api and on it called setupHooks to take web3 and use it to call setupAccounts. Passed the hooks prop and used it to called setupAccount, test value successfully displayed to UI.

#38. Refactored the provider. Replaced hooks with getHooks inside the _web3Api. Created useHooks function. Inside of components folder created web3 folder. Created hooks folder inside of there. Created getUserAccount.jsx inside of there. Created a system of function calls to return the useAccount hook using multiple functions recently created. getHooks from the _web3Api  calls setupHooks with the instance of web3 as its parameter. Setup hooks then calls getUserAccount which then calls useHooks with setupAccounts as the parameter. This call to useHooks results in the setupAccount function being called which actually retrieves the users MetaMask account.

#39. Setup the MetaMask active account user return to UI using handler function inside of useAccount.js. Account successfully displayed to UI.

#40. Worked on the buttons to add more conditionals. Created variants and hoverable properties on button component. 

#41. Added useEffect in useAccount.js to add a change event on user account change to update UI with active account. Added provider as a dependency to useAccount, passed through setupHooks.

#42. Added sliced user account to connect button ui when connected. Set up and used Useswr to handle data fetching in useAccount.js. Installed npm i swr to do so. Retested, accounts successfully fetched/updated on change.

#43. Setup admin property to display admin account. Added adminAddresses. Ran through Keccak256. Used utils to run in return. Added new conditional to connect button in Hero if admin.

#44. Created hooks folder inside components. Created web3 folder inside of hooks. Moved useAccount.js from web3/hooks into hooks/web3. Deleted web3/hooks folders. Made all working as before. Created marketplace folder inside of pages folder. Created index.js inside marketplace. Passed account data through marketplace into Walletbar component, displayed to UI.

#45. Created useNetwork.js inside of web3/hooks and setup initial handler function. Added useNetwork to setupHooks function. Created useNetwork.js inside of hooks/web3. Brought useNetwork into marketplace and displayed passed data successfully. 

#46. Setup useSWR to fetch network id to the UI using web3.eth.getChainId(). Setup a useEffect to update the UI on accounts change using provider.on("chainChanged", netId => mutate(netId)). Passed network through marketplace to Walletbar component. Displayed current network id to UI in Walletbar.

#47. Created mapping from network ID's to strings to display actual names to UI. Displayed network string names to UI.

#48. Created index.js inside of card. Copied from list/index.js to card/index.js. Created new card component. Imported into list/index.js to use there. Copied the same functionality to services.jsx which shares the card component.

#49. Created .env.development & production files in root directory. Setup targetNetwork and isSupported properties in useNetwork.js to eventually display UI error message on wrong network.

#50. Constructed new div using new properties from useNetwork to display error UI message on wrong network. 

#51. There is a small bug which causes the ui incorrect network message to briefly display upon page loading. Had to set up a new property called isLoading using SWR error and data. Passed isLoading into Walletbar through the marketplace. Used inside of Walletbar.

#52. Created index.js inside of hooks/web3. c&p useAccount and useNetwork into new index.js. Deleted useAccount and useNetwork from hooks/web3 folder. Created helper function enhanceHook. Wrapped useNetwork and useAccount functions with enhanceHook. Removed hasInitialResponse and error from useNetwork. Reconstructed the return statement for that file. Made all working as before.

#53. Current setup of setupHooks in the _web3Api results in too many function calls because getHooks gets called any time a useAccount or useNetwork gets called which triggers setupHooks. Removed getHooks. Defined hooks: setupHooks on the web3Api state value. Changed useHooks function body.

#54. Removed isWeb3Loaded property from _web3Api. Replaced with requireInstall which detects if web3 is not present in the browser(no metamask). Replaced instances of isWeb3Loaded with requireInstall. Set up a conditional div inside of Walletbar to display UI message in case of web3 not detected in browser( no metamask).

#55. Reconfigured button conditionals in Hero to utilize requireInstall.

#56. Added Footer prop function to CourseCard, passed in and used in return to add purchase buttons to product cards. Added new variant to purchase buttons in Button component.