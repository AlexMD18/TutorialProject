//JS File Main
var locationArray = new Array();
var userArray = new Array();

var slideIndex = 0;

window.onload = function () {
	
	showSlides();
	
	//Houses
	locationArray[0] = property("Project-Images/Houses/Alaska-House.jpg", "Alaskan Glass Box", "Fairbanks, Alaska", "United States", "House", "$95", "Experiance the Alaskan beauty from the comfort of a heated room!", 1, 1, "Half", "No");
	locationArray[1] = property("Project-Images/Houses/Australia-House.jpg", "Hip House on Hill", "Queensland", "Australia", "House", "$82", "Stay in a super modern house overlooking the Australian countryside.", 3, 2, "Full", "Yes");
	locationArray[2] = property("Project-Images/Houses/Fennville-Michigan-House.jpg", "Modern in Michigan", "Fennville, Michigan", "United States", "House", "$79", "Explore wooded Michigan without losing touch in this modern tech house in the woods", 5, 5, "Full", "Yes");
	locationArray[3] = property("Project-Images/Houses/Hamptons-House.jpg", "Luxurious House in the Hamptons", "Hamptons, New York", "United States", "House", "$299", "Live in absolute luxury during your stay and party like a celebrity!", 8, 10, "Full", "Yes");
	locationArray[4] = property("Project-Images/Houses/HiltonHead-House.jpg", "Modern Glass Mansion", "Hilton Head Island, South Carolina", "United States", "House", "$210", "Gorgeous mansion just a short walk or bike ride from the beach!", 6, 5, "Full", "Yes");
	locationArray[5] = property("Project-Images/Houses/KailuaBay-House.jpg", "Hawaiian Beach House", "Kailua Bay, Hawaii", "United States", "House", "$170", "Stay in your own section of this mansion overlooking the beautiful Pacific Ocean!", 2, 2, "None", "Yes");
	locationArray[6] = property("Project-Images/Houses/Kakos-House.jpg", "Kakos Kave House", "Kakos", "Greese", "House", "$143", "Mama Mia!! Experiance the life of luxury in Greese!", 4, 3, "Full", "No");
	locationArray[7] = property("Project-Images/Houses/Kuki'o-House.jpg", "Luxurious Mansion in Hawaii", "Kuki'o, Hawaii", "House", "United States", "$267", "Party down in Hawaiian mansion just minutes from the beach.", 5, 5, "Full", "Yes");
	locationArray[8] = property("Project-Images/Houses/Lavenham-House.jpg", "Harry Potter House", "Lavenham, Sussex", "England", "House", "$122", "As Seen In Harry Potter!! Live in house where scenes from the world famous movie was filmed!", 3, 3, "Full", "No");
	locationArray[9] = property("Project-Images/Houses/Lexington-House.jpg", "Converted Barn House", "Lexington, Kentucky", "United States", "House", "$90", "Come see what its like to live in a contry style barnhouse!", 4, 3, "Full", "Yes");
	locationArray[10] = property("Project-Images/Houses/Limpopo-House.jpg", "African Safari House", "Limpopo", "South Africa", "House", "$88", "Stay in hour own house just a short drive away from a desert safari.", 2, 2, "Full", "No");
	locationArray[11] = property("Project-Images/Houses/LosAngeles-House.jpg", "Beverly Hills 90210", "Los Angeles, California", "United States", "House", "$525", "Live like a celebrity in this Beverly Hills mansion!", 6, 7, "Full", "Yes");
	locationArray[12] = property("Project-Images/Houses/Macon-House.jpg", "Walkers Beware", "Macon, Georgia", "United States", "House", "$128", "Explore the woods where the hit TV show 'The Walking Dead' was filmed and stay nearby in this modern home!", 4, 3, "Full", "Yes");
	locationArray[13] = property("Project-Images/Houses/Malibu-House.jpg", "Malubu Mountain Mansion", "Malibu, California", "United States", "House", "$333", "Overlook the ocean from your pool on top of your very own mountain.", 5, 5, "Full", "Yes");
	locationArray[14] = property("Project-Images/Houses/Maryland-House.jpg", "Country Style Home In DC", "Landover, Maryland", "United States", "House", "$155", "Enjoy the nations capital, go to a Redskins game and so much more, then come back and stay in our country style house!", 7, 6, "Full", "Yes");
	locationArray[15] = property("Project-Images/Houses/NewPort-House.jpg", "Newly Renovated Conneticut Home", "Newport, Conneticut", "United States", "House", "$92", "Relax in quiet Newport Conneticut and explore all that New England has to offer.", 4, 4, "Full", "Yes");
	locationArray[16] = property("Project-Images/Houses/NorthBend_WA-House.jpg", "Washington Lake House", "Northbend, Washington", "United States", "House", "$160", "Stay at your very own lakehouse in northern Washington! Canoe, hike and more!", 5, 7, "Full", "No");
	locationArray[17] = property("Project-Images/Houses/ParkCity-House.jpg", "Mansion in the Utah Mountains", "Park City, Utah", "United States", "House", "$245", "Stay at our beautiful house just minutes away from the slopes. Come home to a heated pool and hottub!", 6, 5, "Full", "Yes");
	locationArray[18] = property("Project-Images/Houses/Portland-House.jpg", "Quaint Tree House", "Portland, Oregon", "United States", "House", "$93", "Live out your childhood dreams in our cute but spacious treehouse!", 1, 1, "Half", "No");
	locationArray[19] = property("Project-Images/Houses/Provence_France-House.jpg", "Luxurius French Compund", "Provence", "France", "House", "$300", "Enjoy all the best that wine country has to offer in the South of France.", 8, 10, "Full", "Yes");
	locationArray[20] = property("Project-Images/Houses/RiverBendBranch-House.jpg", "Canadian Country Mansion", "Alberta, British Columbia", "Canada", "House", "$180", "Live like a country music star in quiet, calm Canada", 7, 6, "Full", "Yes");
	locationArray[21] = property("Project-Images/Houses/Salem-House.jpg", "Salam Witch House", "Salem, Massachusetts", "United States", "House", "$25", "Stay in this cute ranch house in close proximity to the location of the Salem Witch Trials in the 1800's", 3, 3, "Full", "No");
	locationArray[22] = property("Project-Images/Houses/SiliconValley-House.jpg", "Tech World", "Silicon Valley, California", "United States", "House", "$65", "Stay in the heart of the tech world in this beautiful home in the Valley.", 4, 4, "Full", "Yes");
	locationArray[23] = property("Project-Images/Houses/Taos-House.jpg", "Desert Cave House", "Taos, New Mexico", "United States", "House", "$85", "Experiance life in a one of a kind cave house, but with many added windows for an open roomy feel.", 4, 4, "Full", "No");
	locationArray[24] = property("Project-Images/Houses/Temecula-House.jpg", "Airstream Nature Experiance", "Temecula, California", "United States", "House", "$49", "Reconnect with nature while staying in this beautiful, fully renovated airstream camper in the hills of California.", 1, 1, "Half", "No");
	locationArray[25] = property("Project-Images/Houses/Vals_Swiss-House.jpg", "Swiss Underground Home", "Vals", "Switzerland", "House", "$77", "Enjoy life in a one of a kind underground home in the beautiful Swiss Mountains.", 2, 1, "Full", "Yes");
	locationArray[26] = property("Project-Images/Houses/Waco-House.jpg", "Waco Ranch House", "Waco, Texas", "United States", "House", "$109", "You've seen it on 'Fixer Upper', but not you can experiance this beautiful ranch for yourself!", 4, 4, "Full", "Yes");
	locationArray[27] = property("Project-Images/Houses/Washington-House.jpg", "Hobbit House", "Orando, Washington", "United States", "House", "$50", "Live like Bilbo Baggins and stay in your very own hobbit hole in Washington State!", 2, 1, "Half", "No");
	locationArray[28] = property("Project-Images/Houses/WiltonCastle-House.jpg", "Irish Castle", "Wexford", "Ireland", "House", "$299", "Live like royality in this giant Irish Castle", 12, 10, "Full", "Yes");
	
	//Appartments
	locationArray[29] = property("Project-Images/Appartments/Amsterdam-Apt.jpg", "Cozy, Modern Appt. in the City", "Amsterdamn", "Netherlands", "Appartment", "$37", "Experiance all that Amsterdam has to offer in this close proximity Appartment!", 2, 1, "Full", "Yes");
	locationArray[30] = property("Project-Images/Appartments/Boston-Apt.jpg", "Modern Open-Concept Boston Appt.", "Boston, Massachusetts", "United States", "Appartment", "$40", "Stay in downtown, historical Boston", 2, 2, "Full", "Yes");
	locationArray[31] = property("Project-Images/Appartments/Chicago-Apt.jpg", "Cozy, Appt In Downtown Chiago", "Chiago, Illinois", "United States", "Appartment", "$25", "Stay in downtown Chiago near all the action in this cute studio appartment", 1, 1, "Half", "Yes");
	locationArray[32] = property("Project-Images/Appartments/Coolangatta-Apt.jpg", "Spacious Appt. Overlooking Ocean", "Coolangatta, Queensland", "Australia", "Appartment", "$99", "Visit Australia and stay in this beautiful appartment overlooking the ocean.", 3, 2, "Full", "Yes");
	locationArray[33] = property("Project-Images/Appartments/Flagstaff-Apt.jpg", "Cute Appt. In Arizona Mountains", "Flagstaff, Arizona", "United States", "Appartment", "$21", "Hike the beautiful Arizona mountains and stay in our cute appartment close by!", 2, 1, "Full", "Yes");
	locationArray[34] = property("Project-Images/Appartments/Gainesville-Apt.jpg", "Modern, Warm Appt in Florida", "Gainesville, Florida", "United States", "Appartment", "$34", "Site see Florida, and stay in this warm cozy appartment in Gainesville.", 2, 1, "Full", "Yes");
	locationArray[35] = property("Project-Images/Appartments/Jacksonville-Apt.jpg", "Modern Appt with Everything You Need", "Jacksonville, Florida", "United States", "Appartment", "$38", "Located in close proximity to the Jaguar's stadium.", 2, 2, "Full", "Yes");
	locationArray[36] = property("Project-Images/Appartments/Kensington-Apt.jpg", "Kensington Appt North Philly", "Philadelphia, Pennsylvania", "United States", "Appartment", "$25", "Just a short walk or bike ride from Temple University.", 2, 2, "Full", "Yes");
	locationArray[37] = property("Project-Images/Appartments/Las-Vegas-Apt.jpg", "Appt. on the Strip", "Las Vegas, Nevada", "United States", "Appartment", "$45", "Stay right on the world famous Vegas strip in this stylish appt.", 2, 1, "Full", "Yes");
	locationArray[38] = property("Project-Images/Appartments/Ljubljana-Apt.jpg", "Quaint Appt. In Beautiful Slovenia", "Ljublijana", "Slovenia", "Appartment", "$55", "Appt. in the capital of Slovenia", 3, 2, "Full", "No");
	locationArray[39] = property("Project-Images/Appartments/Louisville-Apt.jpg", "Artistic Louisville Appt", "Louisville, Kentucky", "United States", "Appartment", "$28", "This appartment is a homerun!.", 3, 2, "Full", "Yes");
	locationArray[40] = property("Project-Images/Appartments/Madison_AL-Apt.jpg", "Sweet Appartment Alabama", "Madison, Alabama", "United States", "Appartment", "$32", "Root on the Crimson Tide and stay in this close by appt.", 3, 1, "Full", "Yes");
	locationArray[41] = property("Project-Images/Appartments/NewYorkCity-Apt.jpg", "NYC Views", "New York City, New York", "United States", "Appartment", "$105", "Appt in the city with floor to ceiling windows.", 1, 1, "Full", "Yes");
	locationArray[42] = property("Project-Images/Appartments/Nice_France-Apt.jpg", "Nice Appt. in France", "Nice", "France", "Appartment", "$65", "Look over the southern French city from your balcony in this modern appartment.", 2, 1, "Full", "Yes");
	locationArray[43] = property("Project-Images/Appartments/Paris-Apt.jpg", "Eiffel Tower View", "Paris", "France", "Appartment", "$95", "Modern appt. just blocks from the Eiffel Tower.", 2, 2, "Full", "Yes");
	locationArray[44] = property("Project-Images/Appartments/Philadelphia-Apt.jpg", "Modern Center City Appt.", "Philadelphia, Pennsylvania", "United States", "Appartment", "$65", "Explore historic Philadelphia and then come back to our modern appt in center city.", 2, 1, "Full", "Yes");
	locationArray[45] = property("Project-Images/Appartments/Philadelphia2-Apt.jpg", "Views of Center City Philly", "Philadelphia, Pennsylvania", "United States", "Appartment", "$55", "Overlook beautiful downtown Philadelphia through our 10ft windows", 2, 2, "Full", "Yes");
	locationArray[46] = property("Project-Images/Appartments/Philadelphia3-Apt.jpg", "South Philly Appt.", "Philadelphia, Pennsylvania", "United States", "Appartment", "$62", "Spacious appartment in South Philadelphia", 3, 2, "Full", "Yes");
	locationArray[47] = property("Project-Images/Appartments/Philadelphia4-Apt.jpg", "Luxurious South Philly Appt.", "Philadelphia, Pennsylvania", "United States", "Appartment", "$55", "Luxurius Appt near all of Philladelphia's stadiums.", 3, 2, "Full", "Yes");
	locationArray[48] = property("Project-Images/Appartments/Pheonix-Apt.jpg", "Cute Appt. in Downtown Pheonix", "Pheonix, Arizona", "United States", "Appartment", "$44", "Explore beautiful Arizona, then come back and rest here", 2, 1, "Full", "No");
	locationArray[49] = property("Project-Images/Appartments/Raleigh-Apt.jpg", "Spacious Luxury Appartment", "Raleigh, North Carolina", "United States", "Appartment", "$75", "Panoramic views of Raleigh from this appt.", 3, 2, "Full", "Yes");
	locationArray[50] = property("Project-Images/Appartments/Rome-Apt.jpg", "Overlook Downtown Rome", "Rome", "Italy", "Appartment", "$89", "Live in the heart of Rome Italy and experiance all it's culture first hand.", 2, 1, "Full", "No");
	locationArray[51] = property("Project-Images/Appartments/SanFrancisco-Apt.jpg", "Modern Appartment San Francisco", "San Fransisco, California", "United States", "Appartment", "$66", "Stay in a Modern Appartment in San Fransisco.", 1, 2, "Full", "Yes");
	locationArray[52] = property("Project-Images/Appartments/Scottsdale-Apt.jpg", "Cozy Appt. in Scottsdale Az.", "Scottsdale, Arizona", "United States", "Appartment", "$19", "This warm and cozy appartment will feel like home as soon as you walk in!", 2, 1, "Full", "No");
	locationArray[53] = property("Project-Images/Appartments/Seattle-Apt.jpg", "Floating Appartment", "Seattle, Washington", "United States", "Appartment", "$250", "Experiance this one of a kind appartment for yourself.", 1, 1, "Half", "Yes");
	locationArray[54] = property("Project-Images/Appartments/Shorline_WA-Apt.jpg", "Gamer's Paradise", "Shoreline, Washington", "United States", "Appartment", "$118", "Rent your very own gameroom/appartment!", 1, 1, "Half", "Yes");
	locationArray[55] = property("Project-Images/Appartments/Thimister-Apt.jpg", "Ultra-Modern Appartment", "Thimister", "Belguim", "Appartment", "$88", "See what its like to live at the height of luxury", 2, 1, "Full", "Yes");
	
	//Rooms
	locationArray[56] = property("Project-Images/Rooms/Asbury_Park-Room.jpg", "Room Steps from the Beach", "Asbury Park, New Jersey", "United States", "Room", "$25", "Just a few steps through the backyard to your own private beach!", 1, 1, "None", "Yes");
	locationArray[57] = property("Project-Images/Rooms/Cleveland-Room.jpg", "Cavs and Browns Room", "Cleveland, Ohio", "United States", "Room", "$23", "Come stay here when you go to a Browns or a Cavaliers Game!", 1, 1, "None", "Yes");
	locationArray[58] = property("Project-Images/Rooms/Dallas-Room.jpg", "Modern Masculine Room", "Dallas, Texas", "United States", "Room", "$30", "Stay with us in our newly renovated bedroom with many masculine features but still comfort.", 1, 1, "None", "Yes");
	locationArray[59] = property("Project-Images/Rooms/Fairbanks_AK-Room.jpg", "Alaskin Cabin Room", "Fairbanks, Alaska", "United States", "Room", "$18", "Stay in your very own Alaskin Cabin. Steps away from nature at any moment!", 1, 1, "None", "No");
	locationArray[60] = property("Project-Images/Rooms/LasVegas-Room.jpg", "Las Vegas Strip Hotel Room", "Las Vegas, Nevada", "United States", "Room", "$40", "Just a short elevator ride down and a few steps away from your favorite casinos.", 1, 1, "None", "Yes");
	locationArray[61] = property("Project-Images/Rooms/Los_Angeles-Room.jpg", "Hollywood Movie Star", "Los Angeles, California", "United States", "Room", "$59", "Visit the best locations in Hollywood when you stay with us.", 1, 1, "None", "Yes");
	locationArray[62] = property("Project-Images/Rooms/Maine-Room.jpg", "Beautiful Acadian Den", "Acadia, Maine", "United States", "Room", "$18", "Visit Maine's national parks and so much more!", 1, 1, "None", "Yes");
	locationArray[63] = property("Project-Images/Rooms/Manhatten-Room.jpg", "New York, New York", "New York City, New York", "United States", "Room", "$62", "Come stay in central manhatten and stay close to the action with the coziness of home.", 1, 1, "None", "Yes");
	locationArray[64] = property("Project-Images/Rooms/Oakland-Room.jpg", "Rustic Oakland Room", "Oakland, California", "United States", "Room", "$29", "Experience the best that Southern California has to offer while you stay with us.", 1, 1, "None", "Yes");
	locationArray[65] = property("Project-Images/Rooms/Paris-Room.jpg", "Lights, Love, Paris", "Paris", "France", "Room", "$79", "Visit the city of lights and stay in our modern, comforable rooms!", 1, 1, "None", "Yes");
	locationArray[66] = property("Project-Images/Rooms/Philadelphia-Room.jpg", "Historic Philadelphia Awaits", "Philadelphia, Pennsylvania", "United States", "Room", "$27", "Explore the best parts of Philadelphia, then come back and relax in our room.", 1, 1, "None", "Yes");
	locationArray[67] = property("Project-Images/Rooms/Pittsburg-Room.jpg", "In the Heart of Pitt", "Pittsburg, Pennsylvania", "United States", "Room", "$19", "See a sports game, visit our schools, theres so much to do when you stay in our rooms.", 1, 1, "None", "Yes");
	locationArray[68] = property("Project-Images/Rooms/Richmond-Room.jpg", "Luxurious Richmond Room", "Richmond, Virgina", "United States", "Room", "$88", "Visit Washington DC or many other places around nothern VA.", 1, 1, "None", "Yes");
	locationArray[69] = property("Project-Images/Rooms/SanDiego-Room.jpg", "Southern Cali Dream", "San Diego, California", "United States", "Room", "$41", "Feel like your at home, and enjoy beautuful San Diego, California weather.", 1, 1, "None", "Yes");
	locationArray[70] = property("Project-Images/Rooms/Tacoma-Room.jpg", "Taco Tuesday in Tacoma", "Tacoma, Washington", "United States", "Room", "$40", "Listen to the famous Washington bounce off the skylights as you lay in bed.", 1, 1, "None", "Yes");
	locationArray[71] = property("Project-Images/Rooms/Tokyo-Room.jpg", "Tokyo Heights", "Tokyo", "Japan", "Room", "$60", "Stay in Tokyo's premire rooms as you over look the busy city below.", 1, 1, "None", "Yes");

    //User Array
    userArray[0] = user("Dr_Phil", "MoneyMcGraw@drPhil.com", "Dr. Phil McGraw", "09/01/1950", "Los Angeles", "California", "United States");
    userArray[1] = user("chrissyteigen", "teigenLegend@gmail.com", "Chrissy Teigen", "11/30/1985", "New York City", "New York", "United States");
    userArray[2] = user("BigHanks", "tomHanks@yahoo.com", "Tom Hanks", "07/09/1956", "Los Angeles", "California", "United States");
    userArray[3] = user("TheRock", "DJRock@gymlife.com", "Dwayne Johnson", "05/02/1972", "Honolulu", "Hawaii", "United States");
    userArray[4] = user("SungKang", "HanLue@drifter.com", "Sung Kang", "04/08/1972", "Gainesville", "Georgia", "United States");
    userArray[5] = user("YaGirl_Gal", "GalGadot@gmail.com", "Gal Gadot", "04/30/1985", "Petah Tikva", "Tel Aviv", "Israel");
    userArray[6] = user("VancityReynolds", "RyGuyReynolds@yahoo.com", "Ryan Reynolds", "10/23/1976", "Vancouver", "British Columbia", "Canada");
    userArray[7] = user("BillieEyelash", "BadBabeBillie@eyelash.com", "Billie Eilish", "12/18/2001", "Los Angeles", "California", "United States");
    userArray[8] = user("Postie", "PostMalone@gmail.com", "Austin Post", "07/04/1995", "Syracuse", "New York", "United States");
    userArray[9] = user("iamhalsey", "halsey@aol.com", "Ashley Frangipane", "09/24/1994", "Edison", "New Jersey", "United States");
};

function showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		slideIndex++;
		if (slideIndex > slides.length) {
			slideIndex = 1
		}    
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
		setTimeout(showSlides, 6000); 
	}

class property {
    constructor(image, name, loc, country, type, price, description, numBedrooms, numBaths, kitchen, wifi)
    {
        this.image = image;
        this.name = name;
        this.loc = loc;
        this.country = country;
        this.type = type;
        this.price = price;
        this.description = description;
        this.numBedrooms = numBedrooms;
        this.numBaths = numBaths;
        this.kitchen = kitchen;
        this.wifi = wifi;
    }
}

class user {
    constructor(username, email, name, DOB, city, state, country)
    {
        this.username = username;
        this.email = email;
        this.name = name;
        this.DOB = DOB;
        this.address = address;
        this.state = state;
        this.country = country;
    }
}


