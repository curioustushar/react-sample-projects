import React, { useState } from 'react';
import hreoImg from './hero-bcg.jpeg';

function App() {
  const tabs = [
    {
      name: 'history',
      content:
        "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    },
    {
      name: 'vision',
      content:
        'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.'
    },
    {
      name: 'goals',
      content:
        ' Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.'
    }
  ];

  const [activeTab, setActiveTab] = useState('history');

  const onTabClick = (name) => {
    setActiveTab(name);
  };
  return (
    <div className="App">
      <section className="section">
        <div className="title">
          <h2>about</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            aperiam!
          </p>
        </div>

        <div className="about-center section-center">
          <article className="about-img">
            <img src={hreoImg} alt="hero" />
          </article>
          <article className="about">
            <div className="btn-container">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`tab-btn ${
                    activeTab === tab.name ? 'active' : ''
                  }`}
                  onClick={(e) => onTabClick(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="about-content">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`content ${
                    activeTab === tab.name ? 'active' : ''
                  }`}
                >
                  <h4>{tab.name}</h4>
                  <p>{tab.content}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
