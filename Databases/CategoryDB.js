const categoryDB = [

    {
        categoryName: "Thriller",
        contentList: [
            {
                title: "Money Heist",
                type: "series",
                views: 100000000,
                rating: 8.5
            },

            {
                title: "The Tenant",
                type: "movie",
                views: 20000000,
                rating: 7.9
            }          
        ]
    },

    {
        categoryName: "Comedy",
        contentList: [
            {
                title: "3 Idiots",
                type: "movie",
                views: 2000000000,
                rating: 9.8
            },

            {
                title: "Jab We Met",
                type: "movie",
                views: 50000000,
                rating: 7.1
            }          
        ]
    },

    {
        categoryName: "Romance",
        contentList: [
            {
                title: "Saiyaara",
                type: "movie",
                views: 300000000,
                rating: 2.6
            },

            {
                title: "Mismatched",
                type: "series",
                views: 5000000,
                rating: 6.3
            }          
        ]
    }   
];

function printCatgoryNames() {
     console.log("📋 All categories today:")
    
    for (let i = 0; i < categoryDB.length; i++) {
        console.log(categoryDB[i].categoryName)
    }
}

function printAllContentTitles() {
    console.log("\n 📹 All movies/series under each category: ")

    for (let i = 0; i < categoryDB.length; i++) {
        
        for (let j = 0; j < categoryDB[i].contentList.length; j++) {
            let content = categoryDB[i].contentList[j].title          
            console.log(categoryDB[i].categoryName,": ", categoryDB[i].contentList[j].title)
        }
    }
}

function printMostViewedContent() {
    let mostViewed = categoryDB[0].contentList[0];

    for (let i = 0; i < categoryDB.length; i++) {
        for (let j = 0; j < categoryDB[i].contentList.length; j++) {
            let content = categoryDB[i].contentList[j];

            if (content.views > mostViewed.views) {
                mostViewed = content;
            }
        }
    }

    console.log("\n🔥 Most viewed content:");
    console.log(mostViewed.title, "-", mostViewed.views, "views");
}


function printTotalViewsPerCategory() {
    console.log("\n📊 Total views per category:");

    for (let i = 0; i < categoryDB.length; i++) {
        let totalViews = 0;

        for (let j = 0; j < categoryDB[i].contentList.length; j++) {
            totalViews += categoryDB[i].contentList[j].views;
        }

        console.log(categoryDB[i].categoryName, ":", totalViews);
    }
}


function printHighestRatedContent() {
    let highestRated = categoryDB[0].contentList[0];

    for (let i = 0; i < categoryDB.length; i++) {
        for (let j = 0; j < categoryDB[i].contentList.length; j++) {
            let content = categoryDB[i].contentList[j];

            if (content.rating > highestRated.rating) {
                highestRated = content;
            }
        }
    }

    console.log("\n⭐ Highest rated content:");
    console.log(highestRated.title, "-", highestRated.rating);
}



function printContentByType(type) {
    console.log("\n🔍 Showing all", type + ":");

    for (let i = 0; i < categoryDB.length; i++) {
        for (let j = 0; j < categoryDB[i].contentList.length; j++) {
            let content = categoryDB[i].contentList[j];

            if (content.type === type) {
                console.log(
                    categoryDB[i].categoryName,
                    ":",
                    content.title,
                    "- Rating:",
                    content.rating
                );
            }
        }
    }
}

printCatgoryNames()
printAllContentTitles()
printMostViewedContent();
printTotalViewsPerCategory();
printHighestRatedContent();
printContentByType("movie");
printContentByType("series");