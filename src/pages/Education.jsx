import * as React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Education.css";

import preschool from '../components/images/prep.jpg'
import elementary from '../components/images/elementary.jpg'


export const Education = () => {
  return (
    <div className="education-body">
        <h1> EDUCATION </h1>
        <div className="education-tabs">

           <Tabs defaultActiveKey="pre-school" className="custom-tabs">
              <Tab eventKey="pre-school" title="Pre-School">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={preschool}
                      width="300"
                      height="400"
                      alt="xoxo logo"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Pre-School </div>
                    <p>
                    <br/> I studied kindergarten at the Barangay San Francisco Educare Center. If I am not
                    <br/> mistaken, I think I was about five years old when I started school. I was in the 
                    <br/> afternoon class during  kindergarten. I remember that I loved going to school 
                    <br/> every single time during that time because our uniform is pink, which is my favorite
                    <br/> color— if it isn't obvious tho.
                    <br/>
                    <br/> I spent one year at the Educare Center, and after that, I moved to another school.
                    <br/> I studied pre-school at Sta. Cruz Elementary School. I was in the morning class 
                    <br/> during preparatory. Hence, I had a hard time adjusting since I'm not used to making
                    <br/> up early. My favorite core memory from pre-school was during Christmas, when we
                    <br/> were asked to draw what we wanted to receive from Santa. I drew a Barbie doll and an
                    <br/> an airplane toy, which was a random combination. To my surprise, I got both of them  
                    <br/> during the party. I graduated pre-school in March 2009. 
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="elementary" title="Elementary">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={elementary}
                      width="300"
                      height="400"
                      alt="xoxo logo"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Pre-School </div>
                    <p>
                    <br/> I studied kindergarten at the Barangay San Francisco Educare Center. If I am not
                    <br/> mistaken, I think I was about five years old when I started school. I was in the 
                    <br/> afternoon class during  kindergarten. I remember that I loved going to school 
                    <br/> every single time during that time because our uniform is pink, which is my favorite
                    <br/> color— if it isn't obvious tho.
                    <br/>
                    <br/> I spent one year at the Educare Center, and after that, I moved to another school.
                    <br/> I studied pre-school at Sta. Cruz Elementary School. I was in the morning class 
                    <br/> during preparatory. Hence, I had a hard time adjusting since I'm not used to making
                    <br/> up early. My favorite core memory from pre-school was during Christmas, when we
                    <br/> were asked to draw what we wanted to receive from Santa. I drew a Barbie doll and an
                    <br/> an airplane toy, which was a random combination. To my surprise, I got both of them  
                    <br/> during the party. I graduated pre-school in March 2009. 
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="junior-hs" title="Junior High School">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={preschool}
                      width="300"
                      height="400"
                      alt="xoxo logo"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Pre-School </div>
                    <p>
                    <br/> I studied kindergarten at the Barangay San Francisco Educare Center. If I am not
                    <br/> mistaken, I think I was about five years old when I started school. I was in the 
                    <br/> afternoon class during  kindergarten. I remember that I loved going to school 
                    <br/> every single time during that time because our uniform is pink, which is my favorite
                    <br/> color— if it isn't obvious tho.
                    <br/>
                    <br/> I spent one year at the Educare Center, and after that, I moved to another school.
                    <br/> I studied pre-school at Sta. Cruz Elementary School. I was in the morning class 
                    <br/> during preparatory. Hence, I had a hard time adjusting since I'm not used to making
                    <br/> up early. My favorite core memory from pre-school was during Christmas, when we
                    <br/> were asked to draw what we wanted to receive from Santa. I drew a Barbie doll and an
                    <br/> an airplane toy, which was a random combination. To my surprise, I got both of them  
                    <br/> during the party. I graduated pre-school in March 2009. 
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="senior-hs" title="Senior High School">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={preschool}
                      width="300"
                      height="400"
                      alt="xoxo logo"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Pre-School </div>
                    <p>
                    <br/> I studied kindergarten at the Barangay San Francisco Educare Center. If I am not
                    <br/> mistaken, I think I was about five years old when I started school. I was in the 
                    <br/> afternoon class during  kindergarten. I remember that I loved going to school 
                    <br/> every single time during that time because our uniform is pink, which is my favorite
                    <br/> color— if it isn't obvious tho.
                    <br/>
                    <br/> I spent one year at the Educare Center, and after that, I moved to another school.
                    <br/> I studied pre-school at Sta. Cruz Elementary School. I was in the morning class 
                    <br/> during preparatory. Hence, I had a hard time adjusting since I'm not used to making
                    <br/> up early. My favorite core memory from pre-school was during Christmas, when we
                    <br/> were asked to draw what we wanted to receive from Santa. I drew a Barbie doll and an
                    <br/> an airplane toy, which was a random combination. To my surprise, I got both of them  
                    <br/> during the party. I graduated pre-school in March 2009. 
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="college" title="College">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={preschool}
                      width="300"
                      height="400"
                      alt="xoxo logo"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Pre-School </div>
                    <p>
                    <br/> I studied kindergarten at the Barangay San Francisco Educare Center. If I am not
                    <br/> mistaken, I think I was about five years old when I started school. I was in the 
                    <br/> afternoon class during  kindergarten. I remember that I loved going to school 
                    <br/> every single time during that time because our uniform is pink, which is my favorite
                    <br/> color— if it isn't obvious tho.
                    <br/>
                    <br/> I spent one year at the Educare Center, and after that, I moved to another school.
                    <br/> I studied pre-school at Sta. Cruz Elementary School. I was in the morning class 
                    <br/> during preparatory. Hence, I had a hard time adjusting since I'm not used to making
                    <br/> up early. My favorite core memory from pre-school was during Christmas, when we
                    <br/> were asked to draw what we wanted to receive from Santa. I drew a Barbie doll and an
                    <br/> an airplane toy, which was a random combination. To my surprise, I got both of them  
                    <br/> during the party. I graduated pre-school in March 2009. 
                    </p>
                  </div>
                </div>
              </Tab>
            </Tabs>
        </div>
    </div>
  );
}

export default Education;
