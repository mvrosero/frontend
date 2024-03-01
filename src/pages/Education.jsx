import * as React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Education.css";

import preschool from '../components/images/prep.jpg'
import elementary from '../components/images/elementary.jpg'
import jhs from '../components/images/jhs.jpg'
import shs from '../components/images/shs.jpg'
import college from '../components/images/college.jpg'


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
                      alt="preschool"
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
                      alt="elementary"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Elementary </div>
                    <p>
                    <br/> After spending one year of pre-school at Sta. Cruz Elementary School, my parents
                    <br/> decided to let me continue my studies at the same school. Strategically, the school
                    <br/> was a good choice since it is near our home and most of our neighbors are also
                    <br/> studying there.
                    <br/> 
                    <br/> During my stay at SCES, I had the best time of my life. I was very active in both
                    <br/> academics and extracurriculars. Since grade 1, I have been in the star section and
                    <br/> have been a consistent honor student. Moreover, I was also an active girl scout,
                    <br/> student leader, and performer. Every school year, I join various camping trips and
                    <br/> parades. I was also a Supreme Student Government (SSG) Secretary. I am also part
                    <br/> of every school performance and even dance competitions outside the school.
                    <br/>  
                    <br/> My school always sent me to various competitions, district-wide and division-wide.
                    <br/> Science quiz bees, feature writing competitions, slogan making, tigsik writing, and
                    <br/> more—name it, I have joined it.
                    <br/>
                    <br/> Because of my fruitful and successful stint as an elementary student, I graduated 
                    <br/> with various awards and recognition. I graduated elementary school in March 2015 
                    <br/> as the first honorable mention of our batch.
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="junior-hs" title="Junior High School">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={jhs}
                      width="300"
                      height="400"
                      alt="jhs"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Junior High School </div>
                    <p>
                    <br/> Graduating out of elementary school and stepping into high school was a roller
                    <br/> coaster ride. It's about saying goodbye to old friends and the environment to
                    <br/> welcome new ones. My mother decided to enroll at the Universidad de Sta. Isabel,
                    <br/> because my older sister was also studying there.
                    <br/> 
                    <br/> At USI, I met new friends that have become my constants ever since. Unlike in
                    <br/> elementary school, I decided to stay low-key and chill in my academics and
                    <br/> extracurriculars. Since I was still adjusting, I gave myself ample time to adapt and
                    <br/> learn. Surprisingly, during my first grading as a first-year student, I was awarded
                    <br/> first honors in our class. What a lot of firsts!
                    <br/> 
                    <br/> Fast forward: I finished junior high school in March 2019. I have been a consistent
                    <br/> honor student throughout my stay at Sta. Isabel. Moreover, I also got my National
                    <br/> Certificate II, or NCII, for Bread and Pastry Production. 
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="senior-hs" title="Senior High School">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={shs}
                      width="300"
                      height="400"
                      alt="shs"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> Senior High School </div>
                    <p>
                    <br/> Raise your hand if you weren't able to spend your senior high school year in peace
                    <br/> because of the pandemic! I belong to the second batch of senior high school
                    <br/> students who spent the rest of their school years at home instead of in the classroom.
                    <br/> 
                    <br/> During Grade 11, we had a lot of activities in both academic and non-academic
                    <br/> matters. Indeed, there was a school-life balance. Not to lie, senior high school days
                    <br/> were easy and fun. I had a new circle of friends who made studying more enjoyable.
                    <br/> 
                    <br/> So when the time came when face-to-face classes were prohibited, I really felt sad
                    <br/> because a lot of plans and events were also postponed. However, I utilized my time
                    <br/> at home to learn and practice to make myself college-ready. My efforts and sacrifices
                    <br/> paid off because I was able to land not just one, but multiple scholarships for college.
                    <br/> 
                    <br/> I graduated senior high school in June 2021, and I got the "with highest honors" 
                    <br/>  award with an average of 98 for both the first and second semesters. Through this, 
                    <br/> I qualified for and got the MTV Scholarship, CHED FPESPA Scholarship, and more.
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="college" title="College">
                <div className="school-tab">
                  <div className="school-left-content"> 
                    <img
                      src={college}
                      width="300"
                      height="400"
                      alt="college"
                    />
                   </div> 
                  <div className="school-right-content"> 
                   <div className="school-right-title"> College </div>
                    <p>
                    <br/> The last level in a game is definitely the hardest one. As I grow closer to the end
                    <br/> of my adventure called education, the harder it gets. This one really ain't for
                    <br/> the faint of heart.
                    <br/> 
                    <br/> When I was a freshman, I used to have a list of my goals for college. In this list,
                    <br/> I have been a college student for three years, I just want to graduate already lol.
                    <br/> 
                    <br/> On a serious note, I decided to enroll in Naga College Foundation, Inc. because it
                    <br/> was my "totga" school. When I was about to enroll in high school, I really wanted
                    <br/> to go to NCF. However, my mother had the final say. So when I was choosing a school
                    <br/> for college, NCF was really my top choice.  
                    <br/> 
                    <br/> And I guess I made the right decision because the institution has given me an MTV
                    <br/> Scholarship that covers free tuition and miscellaneous fees for one semester.
                    <br/> Moreover, I continued to excel both in academics and extracurriculars at NCF.
                    <br/>
                    <br/> Since my first year, I have already been a student leader. I was awarded as the
                    <br/> Top 1 Most Outstanding CSG Volunteer in 2022. From there, I  was inspired to 
                    <br/> continue my passion for leadership and service. I have been the secretary of the
                    <br/> college student council at our college. Moreover, I am also the incumbent City Youth
                    <br/> Population and Nutrition Officer. I have been a consistent dean's lister from my first
                    <br/> semester of my first year up until now.   
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
