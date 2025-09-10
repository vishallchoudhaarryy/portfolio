      
fetch("../../components/header.html")
	.then(res => res.text())
	.then(data => document.getElementById("header").innerHTML = data)
	.catch(error => console.error('Error loading header:', error));

// Load footer
fetch("../../components/footer.html")
	.then(res => res.text())
	.then(data => document.getElementById("footer").innerHTML = data)
	.catch(error => console.error('Error loading footer:', error));



	