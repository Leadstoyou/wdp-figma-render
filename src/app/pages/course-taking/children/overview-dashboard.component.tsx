import { Images } from '@assets/images';
import React, { useState } from 'react';

type Props = {
  data?: any;
};

const OverviewInDashboard = ({ data }: Props) => {
  const [isOverviewShowed, setIsOverViewShowed] = useState(false);

  return (
    <>
      <div className="show-more-module--container--2QPRN">
        <span
          id="show-more--66"
          data-type="checkbox"
          data-checked={isOverviewShowed && 'checked'}
          style={{ display: 'none' }}
        ></span>
        <div
          className="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA"
          style={{ maxHeight: '65rem' }}
        >
          <div>
            <div className="course-overview--heading--290FL" data-purpose="course-headline">
              <h2 className="ud-heading-xl">About this course</h2>
              <h3>
                In just 2 hours supercharge your ChatGPT skills with plugins, the code interpreter, and prompt
                engineering!
              </h3>
            </div>
            <dl>
              <div className="course-overview--grid-row--1nKqQ">
                <dt>By the numbers</dt>
                <dd data-purpose="course-main-stats">
                  <div>Students: 35184</div>
                </dd>
                <dd data-purpose="course-additional-stats">
                  <div>Lectures: 25</div>
                </dd>
              </div>
              <div className="course-overview--grid-row--1nKqQ">
                <dt>Description</dt>
                <dd className="course-overview--wide--37Lev" data-purpose="course-description">
                  <div data-purpose="safely-set-inner-html:course-taking:course-description">
                    <p>
                      <strong>
                        Master ChatGPT &amp; Prompt Engineering&nbsp; in just 2 hours with this quick Zero to Hero
                        course!
                      </strong>
                    </p>
                    <p>
                      <strong>**Unlock the Secrets of ChatGPT!**</strong>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      Step into the world of ChatGPT and unravel its mysteries. Whether you’re a developer, content
                      creator, or a curious tech enthusiast, this Udemy course is designed to offer a comprehensive
                      overview of ChatGPT, from its basic setup to advanced functionalities.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>**Discover the Foundations**:</strong>
                      Begin with an insightful introduction where you'll familiarize yourself with the course objectives
                      and get the ball rolling with ChatGPT and OpenAI Playground setups. This will be your starting
                      point into a deeper exploration of ChatGPT's capabilities.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>**Master Prompt Engineering**</strong>: Dive deep into the art and science of prompt
                      engineering. You'll learn to craft effective prompts, harness the power of few-shot prompts, and
                      guide the ChatGPT model effectively. Explore step-by-step reasoning techniques, understand the
                      nuances of custom instructions, and decode the enigma behind model hallucinations. By the end of
                      this segment, you'll have a robust understanding of how to make ChatGPT work for you.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>**Enhance Your Textual Insights**</strong>: Get hands-on with advanced textual techniques.
                      Learn the magic of summarization, sentiment analysis, text transformation, and expansion. By
                      mastering these tools, you'll be able to extract core insights, play with textual tones, and dive
                      into emotional analysis with ease.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong> **Plug Into ChatGPT’s Plugins**</strong>: Ever wondered about ChatGPT's extended
                      functionalities? Discover the realm of ChatGPT plugins. You'll be introduced to the fascinating
                      world of plugins, interact with PDFs, fetch real-time information from Wikipedia, and even book
                      flights! And for those math enthusiasts, a special dive into the Wolfram Plugin awaits.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>**Decipher the Code with ChatGPT**</strong>: Take your ChatGPT journey a notch higher by
                      understanding its code interpreter. Decode its mechanics, explore data analytics, and visualize
                      your findings. You'll also learn to integrate and interpret data from PDFs and images, enhancing
                      your ChatGPT prowess.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>**Begin Your Mastery**</strong>: With this course, you're not just learning; you're
                      evolving. Enhance your prompt engineering skills, explore the world of plugins, and become a
                      ChatGPT maestro.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>**Enroll Now and Embark on Your ChatGPT Odyssey!**</strong>
                    </p>
                  </div>
                  <div className="course-overview--course-description-sets--LhVPO">
                    <h4 className="ud-heading-sm">What you’ll learn</h4>
                    <ul>
                      <li>Understand how to use the ChatGPT Interface</li>
                      <li>Comprehend advanced Prompt Engineering Techniques.</li>
                      <li>Use ChatGPT to generate code to completely automate tasks.</li>
                      <li>Leverage ChatGPT Plugins to supercharge ChatGPT powers!</li>
                      <li>Learn to use the latest techniques with the ChatGPT Plus Code Interpreter</li>
                    </ul>
                    <h4 className="ud-heading-sm">Are there any course requirements or prerequisites?</h4>
                    <ul>
                      <li>
                        ChatGPT Plus Subscription is required to follow along with all the examples in the course.
                      </li>
                    </ul>
                    <h4 className="ud-heading-sm">Who this course is for:</h4>
                    <ul>
                      <li>Anyone curious about maximizing the utility of the powerful AI ChatGPT!</li>
                    </ul>
                  </div>
                </dd>
              </div>
              <div className="course-overview--grid-row--1nKqQ">
                <dt>Instructor</dt>
                <dd className="course-overview--wide--37Lev">
                  <div className="instructor-profile--header-row--n0Prm">
                    <img
                      src="https://img-b.udemycdn.com/user/200_H/9685726_67e7_4.jpg"
                      alt=""
                      className="ud-avatar ud-avatar-image"
                      width="64"
                      height="64"
                      loading="lazy"
                      style={{ width: '6.4rem', height: '6.4rem' }}
                    />
                    <div className="instructor-profile--title-wrapper--2V1u6">
                      <a
                        className="ud-heading-lg instructor-profile--title--1rlDt"
                        href="/user/joseportilla/"
                        data-purpose="instructor-url"
                      >
                        Jose Portilla
                      </a>
                      <p>Head of Data Science at Pierian Training</p>
                    </div>
                  </div>
                  <div className="instructor-profile--social-links-row--14uvr">
                    <a
                      href="https://twitter.com/JoseMPortilla"
                      className="instructor-profile--social-profile-btn--fs2ve"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Images.FaXTwitter className="ud-icon ud-icon-small" />
                    </a>
                    <a
                      href="https://linkedin.com/in/jmportilla"
                      className="instructor-profile--social-profile-btn--fs2ve"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Images.FaFacebook className="ud-icon ud-icon-small" />
                    </a>
                  </div>
                  <div className="instructor-profile--description--vCsKv">
                    <div data-purpose="safely-set-inner-html:course-taking:instructor-description">
                      <p>
                        Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University
                        and&nbsp;years of&nbsp;experience as a professional instructor and trainer for Data Science,
                        Machine Learning and Python Programming. He has publications and patents in various fields such
                        as microfluidics,&nbsp;materials science, and data science. Over the course of his career he has
                        developed a skill set in analyzing data and he hopes to use his experience in teaching and data
                        science to help other people learn the power of programming, the&nbsp;ability to analyze data,
                        and the skills needed to present the data in clear and beautiful visualizations. Currently he
                        works as the Head of Data Science for Pierian Training&nbsp;and provides in-person data science
                        and python programming training courses to employees working at top companies, including General
                        Electric, Cigna, SalesForce, Starbucks, McKinsey and many more.&nbsp;Feel free to check out the
                        website link to find out more information about training offerings.
                      </p>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm show-more-module--focusable-label--19jtd course-overview--show-more-btn--2jq19"
        aria-label="Show more"
        data-css-toggle-id="show-more--66"
      >
        <span>
          {isOverviewShowed ? (
            <span
              className="show-more-module--show-less--1J4F5"
              onClick={() => {
                setIsOverViewShowed(!isOverviewShowed);
              }}
            >
              Show less
            </span>
          ) : (
            <span
              className="show-more-module--show-more--2bohq"
              onClick={() => {
                setIsOverViewShowed(!isOverviewShowed);
              }}
            >
              Show more
            </span>
          )}
        </span>
        {isOverviewShowed ? (
          <Images.MdKeyboardArrowUp className="ud-icon ud-icon-xsmall show-more-module--show-less--1J4F5" />
        ) : (
          <Images.MdKeyboardArrowDown className="ud-icon ud-icon-xsmall show-more-module--show-more--2bohq" />
        )}
      </button>
      ;
    </>
  );
};

export default OverviewInDashboard;
