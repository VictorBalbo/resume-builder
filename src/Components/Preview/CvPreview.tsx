import React, { forwardRef} from 'react';
import flag from '../../Assets/passport.png';
import email from '../../Assets/email.png';
import linkedin from '../../Assets/linkedin.png';
import github from '../../Assets/github.png';
import phone from '../../Assets/phone.png';
import { CV } from '../../Models';
import './CvPreview.scss';

interface Props {
  resume: CV
}

export const CvPreview = forwardRef<HTMLDivElement, Props>(({ resume }, ref) => {

  return (
    <div className='preview' ref={ref}>
      <header className='header'>
        <div>
          <div className='title1'>{resume.Name}</div>
          <div className='title2'>{resume.Job}</div>
        </div>
        <div>
          <div className='contact-info'>
            { resume.Nationality 
              && <div><img src={flag} alt="Passport" title="Nationality" /><span>{resume.Nationality}</span></div> }
            <div><img src={phone} alt="Phone" title="Phone"/><span>{resume.Phone}</span></div>
            <div><img src={email} alt="Email" title="Email"/><a href={'mailto:' + resume.Email}>{resume.Email}</a></div>
            <div><img src={linkedin} alt="Linkedin" title="Linkedin"/><a href={'https://' + resume.Linkedin}>{resume.Linkedin}</a></div>
            <div><img src={github} alt="Github" title="Github"/><a href={'https://' + resume.Github}>{resume.Github}</a></div>
          </div>
        </div>
      </header>
      <div className='work-experience'>
        <div className='title3'>Work Experience</div>
        <hr />
        {resume.WorkExperience?.map(work => 
          <div>
            <div>{work.Role}</div>
            <div>
              <div><a href={work.CompanyWebsite}>{work.Company}</a> | {work.Location}</div>
              <div>{work.StartDate} - {work.EndDate ?? 'Current'}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
})
