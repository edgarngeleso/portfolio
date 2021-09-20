let pages = document.querySelectorAll("#pages a");
	let pagesclasses = document.querySelectorAll("#accounts a");
	let navbar = document.querySelector("#navbar");
	let toggle = document.querySelector("#toggle");
	let credentials = document.querySelector("#credentials");
	let content_container = document.querySelector("#content-container");
	let theme = document.querySelector("#theme");
	let all = document.querySelector("*");
	let togglestatus = 0;
	let themestatus = 0;
	let storage = window.localStorage;
	if (storage.getItem("themestatus") !== null) {
		themestatus = parseInt(storage.getItem("themestatus"));
		console.log(themestatus)
	}

	toggle.addEventListener("click",(e)=>{
		togglemenu(togglestatus);
	})
	if (toggle.style.display == "block") {
		content_container.addEventListener("click",(e)=>{
			togglemenu(1);
		})
	}

	function togglemenu(status){
		if (status == 0) {
			credentials.style.marginLeft = 0+"px";
			toggle.innerHTML = "&#10005";
			togglestatus = 1;
			pages.forEach(page=>{
				page.setAttribute("class","show");
			})
		}else if(status == 1){
			credentials.style.marginLeft = -200+"px";
			toggle.innerHTML = "&#9776";
			togglestatus = 0;
			pages.forEach(page=>{
				page.removeAttribute("class","show");
			})
		}
	}

	theme.addEventListener("click",(e)=>{
		toggletheme(themestatus);
	})

	pagesclasses.forEach(page=>{
		page.addEventListener("click",(e)=>{
			togglemenu(1);
			console.log("clicked");
		})
	})

	let home = document.querySelector("#home");
	let about = document.querySelector("#about");
	let projects = document.querySelector("#projects");
	let contact = document.querySelector("#contact");

	function toggletheme(status){
		if (status == 0) {
			navbar.style.backgroundColor = "black";
			toggle.style.color = "white";
			credentials.style.backgroundColor = "black";
			content_container.style.backgroundColor = "#161614";
			theme.innerHTML = "light";
			home.style.color = "whitesmoke";
			about.style.color = "whitesmoke";
			projects.style.color = "whitesmoke";
			contact.style.color = "whitesmoke";
			pages.forEach((page,index)=>{
				page.classList.add("white");
				pagesclasses[index].classList.add("white");
			})
			themestatus = 1;
		}else if(status == 1){
			navbar.style.backgroundColor = "whitesmoke";
			toggle.style.color = "black";
			credentials.style.backgroundColor = "whitesmoke";
			credentials.style.color = "black";
			content_container.style.backgroundColor = "white";
			content_container.style.color = "#black";
			theme.innerHTML = "dark";
			home.style.color = "black";
			about.style.color = "black";
			projects.style.color = "black";
			contact.style.color = "black";
			pages.forEach((page,index)=>{
				page.classList.remove("white");
				pagesclasses[index].classList.remove("white");
			})
			themestatus = 0;
		}


		storage.setItem("themestatus",themestatus);
		if (storage.getItem == null) {
			themestatus = 1;
		}else{
			console.log(storage.getItem("themestatus"))
		}
	}


	//contact 
	let errors = document.querySelector("#errors");
	let first_name = document.querySelector("#first-name");
	let last_name = document.querySelector("#last-name");
	let email = document.querySelector("#email");
	let password = document.querySelector("#password");
	let textarea = document.querySelector("#textarea");
	let submit = document.querySelector("#submit");
