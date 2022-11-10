import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  articles = [
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "By <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, <a href=\"/profiles/elise-hammond\">Elise Hammond</a> and Maureen Chowdhury, CNN",
      "title": "Live updates: Election results and balance of power in Congress - CNN",
      "description": "Find election results for the US 2022 Midterm Election here. Follow CNN's live coverage and results for key senate, house and state races for Wednesday, Nov. 9.",
      "url": "https://www.cnn.com/politics/live-news/election-results-congress-senate-house-11-09-2022/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/221108174440-01-polling-station-los-angeles-11072022-super-tease.jpg",
      "publishedAt": "2022-11-09T16:36:00Z",
      "content": "The battle for control of Congress both the House and the Senate is coming down to a dwindling number of key races, with Democrats dashing Republicans hopes for a red wave and both parties hanging on… [+4619 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Russia abandons Ukrainian city of Kherson in major retreat - Reuters",
      "description": "Russian Defence Minister Sergei Shoigu on Wednesday ordered his troops to withdraw from the occupied Ukrainian city of Kherson and take up defensive lines on the opposite bank of the River Dnipro.",
      "url": "https://www.reuters.com/world/europe/russia-orders-pullout-west-bank-dnipro-kherson-2022-11-09/",
      "urlToImage": "https://www.reuters.com/resizer/rgoa8njKcK1axj-jhrBVKrxRILQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JRTUWMUDEJPGJMNUO6R264BDZY.jpg",
      "publishedAt": "2022-11-09T16:27:00Z",
      "content": "LONDON, Nov 9 (Reuters) - Russian Defence Minister Sergei Shoigu on Wednesday ordered his troops to withdraw from the occupied Ukrainian city of Kherson and take up defensive lines on the opposite ba… [+2758 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Caroline Kitchener, Kim Bellware, Rachel Roubein",
      "title": "Abortion rights advocates score major midterm victories across the country - The Washington Post",
      "description": "An antiabortion amendment was defeated in conservative Kentucky, while voters in Michigan backed a measure enshrining abortion rights in the state constitution.",
      "url": "https://www.washingtonpost.com/politics/2022/11/09/abortion-midterms-kentucky-michigan/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MBNQ6LZSV7OSOVU4TO3PF6PRPU.jpg&w=1440",
      "publishedAt": "2022-11-09T16:14:40Z",
      "content": "Comment on this story\r\nVoters across the country delivered a series of decisive victories for abortion rights on Tuesday in the first nationwide election since the Supreme Court overturned Roe v. Wad… [+7031 chars]"
    },
    {
      "source": { "id": null, "name": "The Weather Channel" },
      "author": "The Weather Channel",
      "title": "Nicole To Strike Florida As A Hurricane Tonight With Storm Surge, Strong Winds, Flooding Rain - The Weather Channel",
      "description": "Nicole and its remnants will have far-reaching impacts from Florida into the Northeast. Here's the latest. - Articles from The Weather Channel | weather.com",
      "url": "https://weather.com/storms/hurricane/news/2022-11-09-tropical-storm-hurricane-nicole-forecast-florida-southeast",
      "urlToImage": "https://s.w-x.co/nicolewedam.jpeg",
      "publishedAt": "2022-11-09T15:28:06Z",
      "content": "At a Glance\r\n<ul><li>Nicole is forecast to become a hurricane and will make landfall in Florida tonight.</li><li>Hurricane, storm surge and tropical storm alerts have been issued in Florida, Georgia … [+8936 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Amendment set to eliminate constitutional abortion rights fails in Kentucky - WLKY News Louisville",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNjUCEPKdYbE",
      "urlToImage": null,
      "publishedAt": "2022-11-09T14:44:37Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Sarah Min, Jesse Pound, Yun Li",
      "title": "Dow slides by 200 points at the open as control of Congress remains unclear - CNBC",
      "description": "Stocks have climbed for three-straight days ahead of the midterm elections.",
      "url": "https://www.cnbc.com/2022/11/08/stock-futures-are-little-changed-as-wall-street-awaits-results-of-midterm-elections.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107148877-1668001185290-gettyimages-1244449132-US-NEW_YORK-STOCK_MARKET-FALL.jpeg?v=1668001311&w=1920&h=1080",
      "publishedAt": "2022-11-09T14:38:00Z",
      "content": "Stocks were lower on Wednesday following recent market gains as results of the midterm elections provided no clear answers about who would control Congress yet.\r\nThe Dow Jones Industrial Average fell… [+2452 chars]"
    },
    {
      "source": { "id": null, "name": "CoinDesk" },
      "author": "Cheyenne Ligon",
      "title": "Sam Bankman-Fried No Longer a Billionaire After $14.6B Wipe-out: Bloomberg - CoinDesk",
      "description": "The FTX CEO lost an estimated $14.6 billion dollars – nearly 94% of his total wealth – according to the Bloomberg Billionaire Index.",
      "url": "https://www.coindesk.com/business/2022/11/09/sam-bankman-fried-no-longer-a-billionaire-after-146b-overnight-wipe-out/",
      "urlToImage": "https://www.coindesk.com/resizer/-TPUkPBjzAFY0dk5SqXzHKPjqDg=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/UJH3OSMX6BBT3G7APQIQUIRU2I.jpg",
      "publishedAt": "2022-11-09T14:37:00Z",
      "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nThe leader in news and information on cryptocurrency, digital assets and the future o… [+538 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": null,
      "title": "Fantasy Football Rankings for Week 10, 2022: Model says start JuJu Smith-Schuster, but sit Justin Herbert - CBS Sports",
      "description": "SportsLine's computer model reveals its Week 10 Fantasy football projections, rankings, sit-start advice",
      "url": "https://www.cbssports.com/fantasy/football/news/fantasy-football-rankings-for-week-10-2022-model-says-start-juju-smith-schuster-but-sit-justin-herbert/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/22/7a08111e-3136-4e0e-a386-e7dd67719e0f/thumbnail/1200x675/d6ce705cfdc543945360b22bec93e103/juju-smith-schuster-2-1400-us.jpg",
      "publishedAt": "2022-11-09T14:23:45Z",
      "content": "49ers running back Christian McCaffrey put on a show in San Francisco's victory over the Rams two weeks ago. He recorded 18 carries for 94 yards and a touchdown while adding eight receptions on nine … [+3626 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Jackie Wattles",
      "title": "Cargo spacecraft docks with ISS after solar panel fails to deploy - CNN",
      "description": "A cargo spacecraft carrying supplies to the International Space Station successfully docked with the orbital output on Wednesday, despite making its two-day trek through space with only one functioning solar panel.",
      "url": "https://www.cnn.com/2022/11/09/business/international-space-station-cygnus-spacecraft-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221109051311-02-international-space-station-cygnus-spacecraft-scn.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-11-09T14:18:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nA cargo spacecraft successfully docked with the Intern… [+2504 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Brittney Griner sent to Russian penal colony to serve sentence - ABC7",
      "description": "Griner's legal team said she left a detention center on Nov. 4 for a penal colony - a common type of Russian prison where detainees work for minimal pay.",
      "url": "https://www.youtube.com/watch?v=VB9N1T1CgRQ",
      "urlToImage": "https://i.ytimg.com/vi/VB9N1T1CgRQ/maxresdefault.jpg",
      "publishedAt": "2022-11-09T14:00:24Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Alaa Abdel Fattah: British-Egyptian activist's family demand proof of life - BBC",
      "description": "Alaa Abdel Fattah's family have not heard from him since Sunday, when he started refusing water.",
      "url": "https://www.bbc.com/news/world-middle-east-63567581",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/24FA/production/_127566490_6c53ddbbb98293daf069a9d6953d352ec8376fa8.jpg",
      "publishedAt": "2022-11-09T13:33:24Z",
      "content": "The family of jailed British-Egyptian pro-democracy activist Alaa Abdel Fattah have demanded authorities in Cairo provide proof he is still alive. \r\nThey have not heard from him since he escalated hi… [+5566 chars]"
    },
    {
      "source": { "id": null, "name": "Benzinga" },
      "author": "Adam Eckert",
      "title": "Why Disney Stock Is Diving Today - Walt Disney (NYSE:DIS) - Benzinga",
      "description": "Walt Disney Co (NYSE: DIS) shares are trading lower by about 8% Wednesday after the company reported fiscal fourth-quarter financial results that",
      "url": "https://www.benzinga.com/trading-ideas/movers/22/11/29635908/why-disney-stock-is-diving-today",
      "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/11/09/disney-land-g9fd6f8df6_1920.jpg?width=1200&height=800&fit=crop",
      "publishedAt": "2022-11-09T13:31:33Z",
      "content": "Walt Disney CoDIS shares are trading lower by about 8% Wednesday after the company reported fiscal fourth-quarter financial results that came in below analyst estimates. \r\nDisney said fiscal fourth-q… [+1799 chars]"
    },
    {
      "source": { "id": "nfl-news", "name": "NFL News" },
      "author": "Grant Gordon",
      "title": "Bears QB Justin Fields, Bengals RB Joe Mixon lead Players of the Week - NFL.com",
      "description": "Cincinnati running back Joe Mixon and Chicago quarterback Justin Fields highlighted the league's weekly honor roll, which was released Wednesday.",
      "url": "https://www.nfl.com/news/players-of-the-week-2022-week-9-justin-fields-joe-mixon",
      "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/sbl8vlfaoz51yxtvgmtx",
      "publishedAt": "2022-11-09T13:30:00Z",
      "content": "Though Justin Fields and the Chicago Bears' bid at a comeback fell short on Sunday, the second-season signal-caller's performance still made history.\r\nAlong with making history, Fields was recognized… [+634 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "Prisco's NFL Week 10 picks: Bills bounce back and cool off Vikings, Steelers upset Saints, Bucs win in Germany - CBS Sports",
      "description": "Pete Prisco reveals his Week 10 picks, including Tom Brady showing his stuff in Munich",
      "url": "https://www.cbssports.com/nfl/news/priscos-nfl-week-10-picks-bills-bounce-back-and-cool-off-vikings-steelers-upset-saints-bucs-win-in-germany/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/11/09/ab09ce80-b6a9-4301-a53b-b2d615b0939c/thumbnail/1200x675/c235a9af3e01d1a51ba1f27a4fa4c29b/diggs.jpg",
      "publishedAt": "2022-11-09T13:29:00Z",
      "content": "Boy, did I cool off quickly with my picks. \r\nAfter a really good record picking games in Week 8, Week 9 was not nearly as kind. I went 4-72 in my CBS Sports Expert Picks, 9-4 straight up and 2-2-2 wi… [+5099 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Sonic Frontiers - Official Launch Trailer - IGN",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dvx2THi542j8",
      "urlToImage": null,
      "publishedAt": "2022-11-09T12:59:16Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "Eleanor H. Reich",
      "title": "Israel archaeologists find ancient comb with 'full sentence' - The Associated Press - en Español",
      "description": "JERUSALEM (AP) — Israeli archaeologists have found an ancient comb dating back some 3,700 years ago and bearing what is likely the oldest known full sentence in Canaanite alphabetical script, according to an article published Wednesday.",
      "url": "https://apnews.com/article/science-health-middle-east-jerusalem-israel-e5c30f07e0c8ffe041cd6bd2d44c1d80",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/eb3a7d8532c04a92a9960809b86329fa/2907.jpeg",
      "publishedAt": "2022-11-09T11:48:11Z",
      "content": "JERUSALEM (AP) Israeli archaeologists have found an ancient comb dating back some 3,700 years ago and bearing what is likely the oldest known full sentence in Canaanite alphabetical script, according… [+3103 chars]"
    },
    {
      "source": { "id": null, "name": "Fb.com" },
      "author": null,
      "title": "Mark Zuckerberg's Message to Meta Employees | Meta - Meta",
      "description": "Mark Zuckerberg shares some of the most difficult changes we’ve made in Meta’s history.",
      "url": "https://about.fb.com/news/2022/11/mark-zuckerberg-layoff-message-to-employees/",
      "urlToImage": "https://about.fb.com/wp-content/uploads/2021/10/meta-social-16x9-1.jpg?w=1200",
      "publishedAt": "2022-11-09T11:04:08Z",
      "content": "Mark Zuckerberg just shared the following with Meta employees: \r\nToday I’m sharing some of the most difficult changes we’ve made in Meta’s history. I’ve decided to reduce the size of our team by abou… [+7988 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "Mike Catalini",
      "title": "Why AP called Pennsylvania Senate race for John Fetterman - The Associated Press - en Español",
      "description": "WASHINGTON (AP) — Pennsylvania Democratic Lt. Gov. John Fetterman's performance with in-person and absentee votes in Philadelphia and in suburban Delaware County proved too much for Republican Dr. Mehmet Oz to overcome.",
      "url": "https://apnews.com/article/2022-midterm-elections-mehmet-oz-philadelphia-pennsylvania-5ee1635ad1a9d13d7179006d78a8e8bf",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/6142f422df6d41a0bb608b2224f387d9/3000.jpeg",
      "publishedAt": "2022-11-09T10:41:04Z",
      "content": "WASHINGTON (AP) Pennsylvania Democratic Lt. Gov. John Fettermans performance with in-person and absentee votes in Philadelphia and in suburban Delaware County proved too much for Republican Dr. Mehme… [+1929 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Reuters",
      "title": "Italy's rejection of Ocean Viking migrant ship 'unacceptable', France says - Yahoo News",
      "description": "The Ocean Viking migrant rescue ship should dock in Italian waters as per international maritime laws and Rome's refusal to let it do so - which has caused...",
      "url": "https://news.yahoo.com/italys-rejection-ocean-viking-migrant-082805374.html",
      "urlToImage": "https://media.zenfs.com/en/reuters.com/5b2ded610c81bce787412a93f2bbdfe1",
      "publishedAt": "2022-11-09T08:28:05Z",
      "content": "PARIS (Reuters) - The Ocean Viking migrant rescue ship should dock in Italian waters as per international maritime laws and Rome's refusal to let it do so - which has caused the ship to head to Franc… [+984 chars]"
    },
    {
      "source": { "id": null, "name": "guru3d.com" },
      "author": "<!-- Template: news_story_author_posted -->\r\nHilbert Hagedoorn",
      "title": "Corsairs JohnnyGuru: 12VHPWR melting problem is caused by connectors not properly plugged in - guru3d.com",
      "description": "PSU guru Jon Gerrow (aka JohnnyGuru) working at Corsair these days claims that improper plug-ins are to blame for the 12VHPWR melting issue....",
      "url": "https://www.guru3d.com/news-story/corsairs-johnnyguru-claims-12vhpwr-melting-problem-is-caused-by-connectors-not-properly-plugged-in.html",
      "urlToImage": "https://www.guru3d.com/news_teaserimage/1514",
      "publishedAt": "2022-11-09T08:11:00Z",
      "content": "PSU guru Jon Gerrow (aka JohnnyGuru) working at Corsair these days claims that improper plug-ins are to blame for the 12VHPWR melting issue.\r\nHis attempts to melt the connector using other methods pr… [+1025 chars]"
    }
  ]


  constructor(){
    super();
    this.state={
      articles: this.articles, 
      loading: false
    }
  }


  render() {
    return (
      <div className="container">
        <h2>Newzilla: Top Headlines</h2>
        <div className="row">

        {this.state.articles.map((element)=>{

          return <div key={element.url} className="col-4">
                <NewsItem
                title={element.title.slice(0, 50)}
                description={element.description? element.description.slice(0, 100) : element.description}
                imgUrl={element.urlToImage}
                url={element.url}
                />
                </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
