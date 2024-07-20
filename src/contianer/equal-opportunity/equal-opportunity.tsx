import React from 'react'
import style from './equal-opportunity.module.scss'

type Props = {}

const EqualOpportunity = (props: Props) => {
  return (
    <div className={style.opportunity_container}>
      <h1>Equal Opportunity Policy</h1>
      <h2 className={style.second_heading}>Commitment to Equal Opportunities</h2>
      <p>
      We are committed to the principle of equal opportunities in employment. We are opposed to any form of less favourable treatment or financial reward through
      direct or indirect discrimination, harassment, victimisation to employees or job applicants on the grounds of race, religious beliefs, political opinions, 
      creed, colour, ethnic origin, nationality, marital/parental status, sex, sexual orientation or disability or age in line with the characteristics of the 
      Equality Act 2010.
      </p>
      <p> 
      We recognise our obligations under the Sex Discrimination Act, The Equal Pay Act, Article 119 of the Treaty of Rome, The Race Relations Act, The Employment 
      Equality (Sexual Orientation) Regulations 2003 and The Employment Equality (Religion or Beliefs) Regulations 2003, the Employment Equality (Age) Regulations 2006,
      and The Codes of Practice published by the Equal Opportunities Commission, the Commission for Racial Equality and the European Commission;
      </p>
      <ol type="a">
        <li>For the elimination of discrimination on the grounds of sex, sexual orientation or marital status and for the promotion of equal opportunity in employment.</li>
        <li>For the elimination of racial discrimination and the promotion of equal opportunity in employment.</li>
        <li>For the elimination of discrimination in pay between men and women who do the same work, or work of a similar nature or work of equal value.</li>
        <li> For the elimination of discrimination on the grounds of religion or beliefs.</li>
        <li>For the elimination of discrimination on the grounds of age.</li>
      </ol>
      <h5>Employment Practices</h5>
      <p>
        We have a personal responsibility to adhere to the principles of equal opportunity and maintaining racial harmony. We will actively promote equal opportunities 
        in our business to ensure that individuals receive treatment that is fair and equitable and consistent with their relevant aptitudes, potential skills and abilities.
        Employees will be recruited and selected, promoted and trained on the basis of objective criteria. Sexual, racial and other forms of harassment will not be tolerated.
        We will treat unfair discriminatory conduct by any member of staff as a disciplinary offence.
      </p>
      <h5>Monitoring and Review Arrangements</h5>
      <p>We will regularly monitor our policies to ensure that we pursue an effective policy of equal opportunity.</p>
      <h5>Grievance and Disciplinary Procedures</h5>
      <p>
      We will ensure that any employee who feels that they has been treated unfairly or subjected to direct or indirect unfair discrimination can raise the matter through
      the appropriate grievance procedure when every effort will be made to secure a satisfactory resolution. Any employee making a complaint of unfair discrimination will
      be protected from any victimisation in any form.
      </p>
      <h5>Training</h5>
      <p>Employees will be recruited, promoted, developed and trained on the basis of objective criteria.</p>
      <h5>Rehabilitation of Offenders</h5>
      <p>We will not discriminate against anyone who has a spent conviction under the Rehabilitation of Offenders Act 1974.</p>
      <h5>Equal Pay</h5>
      <p>All genders are entitled to be paid equally without any bias on the grounds of sex and that this right is set out in the Treaty of Rome and is enforceable under UK Law.</p>
      <p>All reasonable steps will be taken to ensure that all staff receive equal pay for the same work and for work rated as equivalent and for work of equal value.</p>
      <p>
      It is the responsibility of the <strong>Southshore Projects</strong> Team to set an example and take into account the need to reflect our commitment to quality and diversity. All staff need to be aware of their responsibility to consider this policy in their day-to-day activities.
      </p>
    </div>
  )
}

export default EqualOpportunity