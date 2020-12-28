import React, { memo, useState } from 'react'
import {
  CodeForceTitleSection,
  NewsItem
} from '../Miscellaneous/Miscellaneous.component';



const Home = () => {

  //TODO: Get news items from the server.
  
  const [newsItems, setNewsItems] = useState([
    {
      title: "First challenge starts Dec. 28, 2020",
      time: new Date("12/22/2020"),
      content: 'The first challenge will be starting on December 28th, 2020! If you are looking to participate, please make sure you <s>sign</s> up before December 24th!'
    },
    // {
    //   title: "Another news item",
    //   time: new Date("01/16/2020"),
    //   content: 'Some content goes here...' 
    // },
    // {
    //   title: "Yet another news item",
    //   time: new Date("12/24/2020"),
    //   content: 'Some content goes here too...' 
    // }
  ]);

  // Maybe make a server call for new updates. But that for later.

  return (
    <div className="container-fluid p-0 fullscreen intro">
      <CodeForceTitleSection/>
      <div className="row">
        <div className="col-sm-9 col-centered mt-4">
          <h1 className="p-3 text-center">Updates</h1>
          <div className="row pt-4">
            <div className="col-sm-8 p-0 w-100">
              {[...newsItems].sort((v1, v2) => v1.time > v2.time ? -1: 1).map((item, index) => {
                return (
                  <NewsItem key={item.title} even={index % 2 === 0}>
                    <div className="d-flex justify-content-between">
                      <h4 className="pb-3">
                        {item.title}
                      </h4>
                      <small>{item.time.toDateString()}</small>
                    </div>
                    <div>
                      <p dangerouslySetInnerHTML={{__html: item.content}}/>
                    </div>
                  </NewsItem>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default memo(Home)