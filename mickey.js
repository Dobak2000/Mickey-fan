console.log("Running")

// title
document.title = "Mickey RULEZ!";

// images
var images = document.images;

if (images.length > 0) {
	for (var i = 0; i < images.length; i += 6) {
		images[i].src = chrome.extension.getURL('miki.jpg');
		images[i].srcset = "";
	}
}

if (images.length > 1) {
	for (var i = 1; i < images.length; i += 6) {
		images[i].src = chrome.extension.getURL('miki2.jpeg');
		images[i].srcset = "";
	}
}

if (images.length > 2) {
	for (var i = 2; i < images.length; i += 6) {
		images[i].src = chrome.extension.getURL('miki3.jpg');
		images[i].srcset = "";
	}
}

if (images.length > 3) {
	for (var i = 3; i < images.length; i += 6) {
		images[i].src = chrome.extension.getURL('miki4.jpg');
		images[i].srcset = "";
	}
}

if (images.length > 4) {
	for (var i = 4; i < images.length; i += 6) {
		images[i].src = chrome.extension.getURL('miki5.jpg');
		images[i].srcset = "";
	}
}

if (images.length > 5) {
	for (var i = 5; i < images.length; i += 6) {
		images[i].src = chrome.extension.getURL('miki6.jpg');
		images[i].srcset = "";
	}
}

// headings
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

if (headings.length > 0) {
	for (var i = 0; i < headings.length; i += 7) {
		headings[i].innerHTML = "Mickey 'Neveranswer' Danka 4 CEO & President!";
	}
}

if (headings.length > 1) {
	for (var i = 1; i < headings.length; i += 7) {
		headings[i].innerHTML = "Noshave November all year!";
	}
}

if (headings.length > 2) {
	for (var i = 2; i < headings.length; i += 7) {
		headings[i].innerHTML = "Preference Matrix 4 the plebs!";
	}
}

if (headings.length > 3) {
	for (var i = 3; i < headings.length; i += 7) {
		headings[i].innerHTML = "TechTábor before school!";
	}
}

if (headings.length > 4) {
	for (var i = 4; i < headings.length; i += 7) {
		headings[i].innerHTML = "Mickey 'Neveranswer' Danka 4 Princeps!";
	}
}

if (headings.length > 5) {
	for (var i = 5; i < headings.length; i += 7) {
		headings[i].innerHTML = "Beluga RULEZ!";
	}
}

if (headings.length > 6) {
	for (var i = 6; i < headings.length; i += 7) {
		headings[i].innerHTML = "Nobel Peace Prize 4 Mickey!";
	}
}

// hyperlinks
var links = document.querySelectorAll("a");

if (links.length > 0) {
	for (var i = 0; i < links.length; i += 4) {
		links[i].href = "http://blog.miklosdanka.com/";
	}
}

if (links.length > 0) {
	for (var i = 1; i < links.length; i += 4) {
		links[i].href = "https://miklosdanka.com/preference-matrix/";
	}
}

if (links.length > 0) {
	for (var i = 2; i < links.length; i += 4) {
		links[i].href = "https://www.palantir.com/careers/offices/london";
	}
}

if (links.length > 0) {
	for (var i = 3; i < links.length; i += 4) {
		links[i].href = "http://agondolkodasorome.hu/szakembereknek/tanaraink/";
	}
}

// paragraphs
var paragraphs = document.querySelectorAll("p");

if (paragraphs.length > 0) {
	for (var i = 0; i < paragraphs.length; i += 5) {
		paragraphs[i].innerHTML = "Did you know, that Mickey 'Neveranswer' Danka was the Best Student in Cambridge twice?";
	}
}

if (paragraphs.length > 1) {
	for (var i = 1; i < paragraphs.length; i += 5) {
		paragraphs[i].innerHTML = "Mickey works for one of the GREATEST technology companies.";
	}
}

if (paragraphs.length > 2) {
	for (var i = 2; i < paragraphs.length; i += 5) {
		paragraphs[i].innerHTML = "One of Mickey's namesakes is probably the most famous animal cartoon character. \
		Possibly, he is even more famous than Mickey 'Neveranswer' Danka! And that is not easy to achieve!"
	}
}

if (paragraphs.length > 3) {
	for (var i = 3; i < paragraphs.length; i += 5) {
		paragraphs[i].innerHTML = "Mickey Mouse was created in 1928 by Walt Disney and Ub Iwerks. He is already 88 years old, which is high above the average life span (2-3 years) of mice. Except for his name, he has nothing to do with Mickey 'Neveranswer' Danka.";
	}
}

if (paragraphs.length > 4) {
	for (var i = 4; i < paragraphs.length; i += 5) {
		paragraphs[i].innerHTML = "Mickey 'Neveranswer' Danka's masterpiece is his <span style='font-weight: bold'>Preference Matrix</span>. \
		Have you ever tried it? <a href='https://miklosdanka.com/preference-matrix/'>If you haven't, just click here!</a>";
	}
}