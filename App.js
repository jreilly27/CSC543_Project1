import React, { useState } from 'react';
import './imp.css';
import videoFile from './vrgoggles.mp4';


function App() {
  const [isBoxOpen, setIsBoxOpen] = useState({
    ar: false,
    vr: false,
    mr: false,
    benefits: false,
    limitations: false,
    perception: false,
    health: false,
    addiction: false,
    collection: false,
    inclusion: false
  });

  const toggleBox = (box) => {
    setIsBoxOpen(prevState => ({
      ...prevState,
      [box]: !prevState[box]
    }));
  };

  return (
    <div className="App">
        <header className="App-header">

        <h1 className="title">Extended Reality (XR) Technology</h1>
        <h2 style={{ color: 'rgb(174, 183, 241)', marginLeft: '20px', fontSize: '15px', fontFamily: 'Courier New, Courier, monospace' }}>Welcome To My Project Where We Will Explore The Implications Of XR Technologies.</h2>

        <br />

        <h1 style={{ color: 'rgb(225, 81, 144)', marginLeft: '80px', fontSize: '150%', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', marginBottom: '0px' }}>Understanding Extended Reality (XR) Technology</h1>
        <div className="container">
          <p className="intro">
            In our rapidly evolving digital world, technologies have drastically altered our perception and interactions with reality. As we take a deeper look
            into Extended Reality (XR) technologies, we can see that the extent of human experience is currently merging immersive computer-generated environments and information with the real world.
            XR technologies are developing quickly and are increasingly prevalent in various industries, including education, which I will touch on later.
            The term "XR" or Extended Reality is an ambiguous umbrella term which encompasses Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).[2]
            These cutting edge technologies redefine human interaction through immersive digital interfaces, which alter the way we interact, experience,
            and understand the physical world visually.
          </p>

          <video id="myVideo" width="320" height="240" autoPlay loop muted>
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>

        <br /><br /><br />
        <h1 style={{ color: 'rgb(174, 183, 241)', textAlign: 'center', fontSize: '100%', fontFamily: 'Courier New, Courier, monospace', marginBottom: '0px' }}>Click Each Box To Explore AR, VR, and MR</h1>
        <br /><br />

        <div className="xrterms">
        <div className={`box ar ${isBoxOpen.ar ? 'show' : ''}`} onClick={() => toggleBox('ar')}>
            Augmented Reality (AR)
            <div className="content">
              <p>Augmented Reality (AR) refers to the real-time integration of digital information with the physical world, enhancing users' experiences
                by overlaying virtual elements onto their surroundings. The term was created by Tom Caudell and David Mizell in 1990.[1] Since then, AR has rapidly evolved alongside
                the growth of mobile devices and advancements in technology. Today, AR is changing the way we interact with our surroundings and has resulted in applications across a variety of different industries, changing
                the way we view and interact with digital content in the real world. Applications include medical simulations, educational tools,
                virtual try-on experiences in the fashion industry, and aids for navigation.[2]</p>
            </div>
          </div>

          <div className={`box vr ${isBoxOpen.vr ? 'show' : ''}`} onClick={() => toggleBox('vr')}>
            Virtual Reality (VR)
            <div className="content">
              <p>Virtual Reality (VR) completely immerses users in digitally produced realities, creating a powerful experience of presence and interaction.[1] Although introduced by Jaron Lanier in 1987,
                the concept of VR traces all the way back to The Link Trainer, a device utilized for pilot training in World War II, which marked the beginning of technology that closely resembled VR.[2]
                Today, VR is most commonly associated with Head-mounted displays (HMDs) or headsets, which transport users to virtual environments while blocking out the physical world. VR was originally designed for entertainment
                and video games, but has since rapidly grown into various industries, including marketing, prototyping, job training, fashion, and healthcare. [2]
              </p>
            </div>
          </div>

          <div className={`box mr ${isBoxOpen.mr ? 'show' : ''}`} onClick={() => toggleBox('mr')}>
            Mixed Reality (MR)
            <div className="content">
              <p>Mixed Reality (MR) seamlessly integrates digital content with real-world surroundings, blurring the line between the physical and virtual
                worlds.[1] This concept enables users to interact with and control digital objects simultaneously as if they were a part of their physical environment.
                Unlike Virtual Reality (VR), which immerses users entirely in virtual environments, and Augmented Reality (AR), which overlays digital
                elements onto the real world, Mixed Reality (MR), allows digital and physical objects to coexist and interact with real-world surroundings in real time. This technology enables dynamic visualizations, interactive training scenarios, and immersive simulations,
                offering new possibilities for education, entertainment, and many other applications.[3] An example of MR would be the new release by Apple, Apple Vision Pros.</p>
            </div>
          </div>
        </div>

        <div className="images">
          <img className="placeholder-image1" src="https://learn.g2.com/hubfs/G2CM_FI224_Learn_Article_Images-%5BAugmented_Reality%5D_V1a.png" alt="ar" />
          <img className="placeholder-image2" src="https://assets.weforum.org/article/image/4_Rccp3-97LfklPFhiq5i_Qm3fBE4VRs7T1DMKDyt7w.jpg" alt="vr" />
          <img className="placeholder-image3" src="https://media.wired.com/photos/647e2a2040f1b0ff578445a2/master/pass/Apple-Vision-Pro-Gear.jpg" alt="Mr" />
        </div>
        <br /><br /><br /><br /><br /><br />
        <hr />
        
        <h1 className="title" style={{ color: 'rgb(225, 81, 144)', textAlign: 'center', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', marginBottom: '10px', fontSize: '40px' }}>What are the Benefits and Limitations of XR Technologies?</h1>
        <h2 style={{ color: 'rgb(174, 183, 241)', textAlign: 'center', fontSize: '100%', fontFamily: 'Courier New, Courier, monospace', marginBottom: '10px'}}>For this segment of my project, I will be concentrating specifically on the use of extended reality (XR) in education.</h2>
        <br />

        <div className="proscons">
          <div className={`box benefits ${isBoxOpen.benefits ? 'show' : ''}`} onClick={() => toggleBox('benefits')}>
            Benefits
            <div className="content2">
              <ul>
                <li>
                  <p><strong>Enhanced Learning Experiences:</strong> XR provides more immersive and engaging learning experiences, which can lead to improved knowledge retention. [6]</p>
                </li>
                <li>
          <p><strong>Accessibility:</strong> XR can remove geographical and physical barriers, allowing students to access educational content remotely. [6]</p>
        </li>
        <li>
          <p><strong>Interactivity:</strong> XR enables interactive learning experiences, promoting active participation and deeper understanding of concepts. [6]</p>
        </li>
        <li>
          <p><strong>Real-world Simulations:</strong> XR allows for realistic simulations, providing practical training in various fields such as science, history, and geography. [6]</p>
        </li>
        <li>
          <p><strong>Customizability:</strong> Individual learning needs and preferences can be met using XR applications, which accommodate a wide range of learning styles. [6]</p>
        </li>
        <li>
          <p><strong>Innovative Teaching Methods:</strong> XR enables the integration of gamification and other innovative teaching techniques, making learning more enjoyable and effective. [6]</p>
        </li>
        <li>
          <p><strong>Collaborative Learning:</strong> XR facilitates collaborative learning experiences, allowing students to work together on projects and experiments regardless of their physical location. [6]</p>
        </li>
        <li>
          <p><strong>Skill Development:</strong> XR can help develop critical thinking, problem-solving, and spatial reasoning skills through hands-on activities and simulations. [6]</p>
        </li>
        <li>
          <p><strong>Safety:</strong> XR provides a safe environment for students to explore potentially hazardous subjects such as chemistry without the risk of injury. [6]</p>
        </li>
        <li>
          <p><strong>Information Quantity:</strong> XR has greater information density than traditional methods, due to 3D images and videos that convey more data. [6]</p>
        </li>
        <li>
          <p><strong>Exciting Learning Opportunities:</strong> XR allows students to visit places that would be expensive or impossible to access otherwise, enhancing the learning experience. [6]</p>
        </li>
        <li>
          <p><strong>Automated Gamification:</strong> XR enables the automation of gamification within the learning process. In a traditional method, 
            it is challenging for teachers or trainers to consistently recognize and reward students for their achievements and positive interactions. However, XR makes that possible because the teaching-learning process can be prepared ahead of time
             providing opportunities for personalized feedback and rewards. [6]</p>
        </li> 
      </ul>
    </div>
</div>

            <div className={`box limitations ${isBoxOpen.limitations ? 'show' : ''}`} onClick={() => toggleBox('limitations')}>
            Limitations
            <div className="content2">
              <ul>
                <li>
                  <p><strong>Financial Costs:</strong> Implementing XR technology can be costly, requiring investments in hardware (e.g. high-end computers, VR goggles), software (e.g. proprietary software built from scratch or
                    subscriptions), and the cost of training individuals how to use these technologies. [6]</p>
                </li>
                <li>
              <p><strong>Technical Issues:</strong> XR environments may encounter technical issues such as software glitches or hardware compatibility problems, disrupting the learning process. [6]</p>
          </li>
          <li>
              <p><strong>Ethical Concerns:</strong> XR creates ethical concerns around privacy, data security, and identity protection, requiring careful evaluation and implementation of safety precautions. [6]</p>
          </li>
          <li>
              <p><strong>Physical Health Risks:</strong> Prolonged use of XR devices may lead to physical discomfort or health issues such as eye strain, headaches, or motion sickness. [6]</p>
          </li>
          <li>
              <p><strong>Learning Curve:</strong> Learning to use XR technology properly may take time and effort, which may impact initial acceptance rates among students as well as teachers. [6]</p>
          </li>
          <li>
              <p><strong>Content Quality:</strong> The quality of XR educational content can vary, with some experiences being more immersive and educational than others. [6]</p>
          </li>
          <li>
              <p><strong>Accessibility Issues:</strong> The digital divide within education may widen if certain students lack access to XR devices or reliable internet connections. [6]</p>
          </li>
          <li>
              <p><strong>Teacher Training:</strong> Teachers may require additional training and support to effectively integrate XR technology into their teaching practices, 
                posing a challenge in terms of professional development. [6]</p>
          </li>
          <li>
            <p>Exisiting studies concluded that VR in classrooms leads to reduced human interaction as well as some students lack the patience for learning these technologies and it results in poor concentration. [7]</p>
        </li>
              </ul>
            </div>
          </div>
        </div>
        
      <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
        
        <h1 className="title" style={{ fontSize: '50px' }}>Extended Reality (XR) Technology Ethical Concerns</h1>
        <h2 style={{ color: 'rgb(174, 183, 241)', textAlign: 'center', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px' }}>
        XR technology presents significant ethical concerns and societal implications that need to be addressed.<br /><br />Click each box to learn more!
      </h2>

      <br />


      <button className={`collapsible ${isBoxOpen.perception ? 'active' : ''}`} onClick={() => toggleBox('perception')} style={{ color: 'rgb(225, 81, 144)', fontSize: '150%', fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif', textAlign: 'center' }}>
        Impact on Users' Perception of Reality
      </button>
      <div className="ethical" style={{ display: isBoxOpen.perception ? 'block' : 'none' }}>
        <ul>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              XR devices incorporate several sensors and displays, which allow them to analyze sensor inputs and provide suitable responses on the display, resulting in an immersive experience. To create a sense of presence in a virtual setting, these devices are designed to evoke emotions and sensations and capture them using sensory systems integrated with the human body. Through vibro-haptic and thermo-haptic sensors, these devices generate vibrational and thermal feedback within the virtual realm, simulating physical touch sensations on the user's skin. [5]
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              XR technologies have the potential to significantly alter users' perception of reality by blending virtual elements with their physical environment. Extensive research has demonstrated that prolonged exposure to virtual environments can impair users' perception of time and space, which can cause disorientation upon returning to the real world surroundings, leading users to question what is real and what is simulated. [4]
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              In addition, the immersive nature of XR experiences may influence users' emotional responses and behaviors. For example, users could grow attached to virtual locations or characters, making it harder to tell the difference between reality and fiction and possibly influencing their relationships and responsibilities in the real world. [4]
            </p>
          </li>
        </ul>
      </div>

      <button className={`collapsible ${isBoxOpen.health ? 'active' : ''}`} onClick={() => toggleBox('health')} style={{ color: 'rgb(225, 81, 144)', fontSize: '150%', fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif', textAlign: 'center' }}>
        Threat To Human Health
      </button>
      <div className="ethical" style={{ display: isBoxOpen.health ? 'block' : 'none' }}>
        <ul>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              The blurring of boundaries between a physical and virtual reality, particularly for those who spend extended amounts of time in VR and MR environments, can cause cognitive dissonance, confusion, and psychological harm. [4]
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              The damages from poorly designed or faulty XR systems can cause anything from simulator sickness to extremely serious long-term health problems. Extended use of XR applications can lead to headaches, nausea, fatigue, dizziness, and blurry vision. [5]
            </p>
          </li>
        </ul>
      </div>
      
      <button className={`collapsible ${isBoxOpen.addiction ? 'active' : ''}`} onClick={() => toggleBox('addiction')} style={{ color: 'rgb(225, 81, 144)', fontSize: '150%', fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif', textAlign: 'center' }}>
        Potential for Addiction
      </button>
      <div className="ethical" style={{ display: isBoxOpen.addiction ? 'block' : 'none' }}>
        <ul>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              Individuals may become addicted to XR experiences due to their intensely engaging and immersive qualities. As with other types of technological dependency, like an addiction to gaming or social media, XR addiction can show up as compulsive use, withdrawal symptoms, and impaired functioning in daily life. [4]
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              Research suggests that individuals with predisposing factors, such as underlying mental health issues or susceptibility to addictive behaviors, may be at higher risk of developing XR addiction. [4] Additionally, some XR experiences include addictive components, such as videos games or engaging social interactions, which increases the likelihood of addiction for vulnerable people.
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              Addiction to XR can have serious negative impacts on a person's mental and physical health as well as their ability to function in social situations, the classroom, and the workplace. To reduce these risks, interventions that encourage responsible consumption and offer assistance to those who are addicted to XR are essential.
            </p>
          </li>
        </ul>
      </div>

      <button className={`collapsible ${isBoxOpen.collection ? 'active' : ''}`} onClick={() => toggleBox('collection')} style={{ color: 'rgb(225, 81, 144)', fontSize: '150%', fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif', textAlign: 'center' }}>
        Data Collection
      </button>
      <div className="ethical" style={{ display: isBoxOpen.collection ? 'block' : 'none' }}>
        <ul>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              To improve functionality, optimize performance, and personalize experiences, XR technologies gather massive amounts of user data. Concerns regarding privacy and security are raised by the possibility that this data contains sensitive information including biometric data, surveillance, tracking, and intrusion. [4]
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              To go into further detail, the sensitive data collected by XR applications like biometric data includes things such as iris identification, pupil tracking, gaze tracking, as well as an individual's physical appearance. Additionally, details on the users' social activities, assets, daily life, heart rate, home interior, and occupations can be found in the collected data. [5]
            </p>
          </li>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              The growth of XR devices and applications has raised concerns about consent and data protection. There are concerns regarding transparency and informed consent because users might not always be aware of the extent to which their data is being gathered, how it is being used, and who has access to it. Additionally, it has been proven that XR technologies are prone to cyber attacks, particularly data hacks. These vulnerabilities not only compromise the integrity and privacy of user data but also pose significant risks to the security of XR systems and the overall user experience. [5]
            </p>
          </li>
        </ul>
      </div>

      <button className={`collapsible ${isBoxOpen.inclusion ? 'active' : ''}`} onClick={() => toggleBox('inclusion')} style={{ color: 'rgb(225, 81, 144)', fontSize: '150%', fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif', textAlign: 'center' }}>
        Access and Inclusion
      </button>
      <div className="ethical" style={{ display: isBoxOpen.inclusion ? 'block' : 'none' }}>
        <ul>
          <li style={{ color: 'rgb(174, 183, 241)' }}>
            <p style={{ color: 'ghostwhite', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight: '1.7', textAlign: 'center' }}>
              XR technologies have the potential to generate new kinds of marginalization and exclusion, particularly among individuals without access to the required technology. This exclusion has the potential to exacerbate already-existing disparities in education, employment opportunities, and social participation. [4]
            </p>
          </li>
        </ul>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
  <img src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/ecabf7a/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F67%2Ff4%2Ff57ea38a412ab3d6dafb875ddb21%2Fadobestock-292854916.jpeg" alt="vr" width="50%" />
</div>

<h1 className="title" style={{ fontSize: '50px' }}>Conclusion</h1>
        <h2 style={{ color: 'rgb(174, 183, 241)', textAlign: 'center', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px', lineHeight:'1.9' }}>
        In conclusion, Extended Reality (XR) technology provides an intriguing variety of benefits, including enhanced immersive experiences and innovative educational 
        and training opportunities. However, it also introduces significant concerns regarding ethics and risks. Issues like the impact on users' perceptions of reality,
         hazards to human health, the possibility of addiction, and data gathering privacy concerns need to be taken seriously. Ultimately, it is up to viewers to critically 
         assess and form their own opinions about XR technology and how it might impact the world around us.<br />  I hope you all enjoyed my project!
      </h2>

      <br /><br /><br />
      </header>
    </div> 
  );
}



export default App;


