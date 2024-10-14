
class MifugoFarmingCompany {
    constructor(companyDetails, founders, farmAnimals) {
        this.companyDetails = companyDetails;
        this.founders = founders;
        this.farmAnimals = farmAnimals;
    }

    // Method to render About Us Section
    renderAboutSection() {
        const aboutSection = document.getElementById('about-section');
        
        const heading = document.createElement('h2');
        heading.textContent = "About Us";
        aboutSection.appendChild(heading);

        const missionParagraph = document.createElement('p');
        missionParagraph.textContent = `Mission: ${this.companyDetails.mission}`;
        aboutSection.appendChild(missionParagraph);

        const visionParagraph = document.createElement('p');
        visionParagraph.textContent = `Vision: ${this.companyDetails.vision}`;
        aboutSection.appendChild(visionParagraph);

        const valuesHeading = document.createElement('h3');
        valuesHeading.textContent = "Our Core Values";
        aboutSection.appendChild(valuesHeading);

        const valuesList = document.createElement('ul');
        this.companyDetails.values.forEach(value => {
            const listItem = document.createElement('li');
            listItem.textContent = value;
            valuesList.appendChild(listItem);
        });
        aboutSection.appendChild(valuesList);
    }

    // Method to render Founders Section
    renderFoundersSection() {
        const foundersContainer = document.getElementById('founders-container');

        this.founders.forEach(founder => {
            const founderDiv = document.createElement('div');
            founderDiv.className = 'founder';

            const img = document.createElement('img');
            img.setAttribute('src', founder.image);
            img.setAttribute('alt', founder.name);
            founderDiv.appendChild(img);

            const nameHeading = document.createElement('h3');
            nameHeading.textContent = founder.name;
            founderDiv.appendChild(nameHeading);

            const roleParagraph = document.createElement('p');
            roleParagraph.textContent = founder.role;
            founderDiv.appendChild(roleParagraph);

            foundersContainer.appendChild(founderDiv);
        });
    }

    // Method to render Farm Animals Section
    renderFarmAnimalsSection() {
        const animalsGallery = document.getElementById('animals-gallery');

        this.farmAnimals.forEach(animal => {
            const img = document.createElement('img');
            img.setAttribute('src', animal.image);
            img.setAttribute('alt', animal.name);
            animalsGallery.appendChild(img);
        });
    }

    // Initialize all sections
    init() {
        this.renderAboutSection();
        this.renderFoundersSection();
        this.renderFarmAnimalsSection();
    }
}

// Data for the company, founders, and farm animals
const mifugoFarming = new MifugoFarmingCompany(
    {
        mission: "To promote sustainable livestock farming and ensure the well-being of animals.",
        vision: "To be the leading provider of healthy, organic farm produce while promoting sustainable agriculture.",
        values: ["Sustainability", "Innovation", "Animal Welfare", "Community"]
    },
    [
        { name: "John Doe", role: "CEO", image: "../about us page oop/images/man1.jpg" },
        { name: "Jane Smith", role: "COO", image: "../about us page oop/images/elegant omyy.png" },
        { name: "Emily Brown", role: "CFO", image: "../about us page oop/images/woman1.jpg" }
    ],
    [
        { name: "Cow", image: "../about us page oop/images/dairycow image.jpg" },
        { name: "Sheep", image: "../about us page oop/images/goatfarm.jpg" },
        { name: "Goat", image: "../about us page oop/images/sheepfarm.jpg" }
    ]
);

// Initialize the page content when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    mifugoFarming.init();
});
