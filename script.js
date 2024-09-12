// Syllabus data structure with added resources
const syllabus = {
    "First Year": {
        "Sanskrit": {
            topics: ["Basic grammar", "Ayurvedic terminology", "Classical texts"],
            resources: {
                books: ["A Primer of Sanskrit by Michael Coulson", "Sanskrit for Beginners by Michael Coulson"],
                links: ["https://en.wikipedia.org/wiki/Sanskrit", "https://spokensanskrit.org/"]
            }
        },
        "Padarth Vigyan and Ayurved Itihas": {
            topics: ["Philosophy of Ayurveda", "History of Ayurveda", "Fundamental principles"],
            resources: {
                books: ["Ayurveda: The Science of Self-Healing by Dr. Vasant Lad", "Textbook of Ayurveda: Fundamental Principles by Dr. Vasant Lad"],
                links: ["https://en.wikipedia.org/wiki/Ayurveda", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3336651/"]
            }
        },
    },
    "Second Year": {
        "Dravyaguna Vigyan": {
            topics: ["Pharmacology", "Medicinal plants", "Pharmacodynamics"],
            resources: {
                books: ["Dravyaguna Vijnana by Dr. J.L.N. Sastry", "Ayurvedic Pharmacopoeial Plant Drugs by C.P. Khare"],
                links: ["https://en.wikipedia.org/wiki/Dravyaguna", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3336651/"]
            }
        },
    },
    "Third Year": {
        "Kayachikitsa": {
            topics: ["Internal medicine", "Diagnosis", "Treatment protocols"],
            resources: {
                books: ["Charaka Samhita by Charaka", "Textbook of Kayachikitsa by S. Suresh Babu"],
                links: ["https://en.wikipedia.org/wiki/Kayachikitsa", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3968704/"]
            }
        },
        "Shalya Tantra": {
            topics: ["Surgery", "Wound management", "Surgical procedures"],
            resources: {
                books: ["Sushruta Samhita by Sushruta", "A Manual on Clinical Surgery by S. Das"],
                links: ["https://en.wikipedia.org/wiki/Shalya_tantra", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3487240/"]
            }
        },
    },
    "Fourth Year": {
        "Prasuti Tantra and Stri Roga": {
            topics: ["Obstetrics", "Gynecology", "Women's health"],
            resources: {
                books: ["Ayurvedic Prasuti Tantra Evam Stri Roga by Tewari P.V.", "DC Dutta's Textbook of Obstetrics"],
                links: ["https://en.wikipedia.org/wiki/Ayurveda#Eight_disciplines_of_Ayurveda", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3665090/"]
            }
        },
        "Bal Roga": {
            topics: ["Pediatrics", "Child development", "Pediatric diseases"],
            resources: {
                books: ["Kaumarabhritya by Dr. Abhimanyu Kumar", "IAP Textbook of Pediatrics"],
                links: ["https://en.wikipedia.org/wiki/Ayurveda#Eight_disciplines_of_Ayurveda", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3221057/"]
            }
        },
    },
};

// Populate syllabus navigation
const syllabusList = document.getElementById('syllabus-list');
const syllabusTree = document.getElementById('syllabus-tree');

Object.keys(syllabus).forEach(year => {
    const li = document.createElement('li');
    li.textContent = year;
    li.addEventListener('click', () => displaySyllabusTree(year));
    syllabusList.appendChild(li);
});

function displaySyllabusTree(year) {
    const subjects = syllabus[year];
    let treeHtml = `<h3>${year}</h3><ul>`;

    Object.keys(subjects).forEach(subject => {
        treeHtml += `<li class="subject">${subject}<ul class="topics" style="display:none;">`;
        subjects[subject].topics.forEach(topic => {
            treeHtml += `<li>${topic}</li>`;
        });
        treeHtml += '</ul>';
        
        // Add resources
        treeHtml += '<div class="resources" style="display:none;">';
        treeHtml += '<h4>Resources:</h4>';
        treeHtml += '<h5>Books:</h5><ul>';
        subjects[subject].resources.books.forEach(book => {
            treeHtml += `<li>${book}</li>`;
        });
        treeHtml += '</ul><h5>Links:</h5><ul>';
        subjects[subject].resources.links.forEach(link => {
            treeHtml += `<li><a href="${link}" target="_blank">${link}</a></li>`;
        });
        treeHtml += '</ul></div>';
        
        treeHtml += '</li>';
    });

    treeHtml += '</ul>';
    syllabusTree.innerHTML = treeHtml;

    // Add click event to subjects to show/hide topics and resources
    document.querySelectorAll('.subject').forEach(subject => {
        subject.addEventListener('click', (e) => {
            const topics = subject.querySelector('.topics');
            const resources = subject.querySelector('.resources');
            topics.style.display = topics.style.display === 'none' ? 'block' : 'none';
            resources.style.display = resources.style.display === 'none' ? 'block' : 'none';
            e.stopPropagation();
        });
    });
}

// Initialize with First Year syllabus
displaySyllabusTree('First Year');

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Q&A Functionality (placeholder)
const askButton = document.getElementById('ask-button');
const questionInput = document.getElementById('question-input');
const answerOutput = document.getElementById('answer-output');

askButton.addEventListener('click', () => {
    const question = questionInput.value;
    // This is a placeholder. In a real application, you'd send this question to a backend API.
    answerOutput.innerHTML = `<strong>Q: ${question}</strong><br>A: I'm sorry, but I don't have enough information to answer that question accurately. Please consult with a qualified Ayurvedic practitioner or refer to authoritative Ayurvedic texts for more information.`;
});

// Resource links (placeholder functionality)
document.querySelectorAll('.resource-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This feature is coming soon! Check back later for access to our extensive resource library.');
    });
});