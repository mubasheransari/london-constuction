import React from 'react'
import style from './modern-slavery.module.scss'

type Props = {}

const policy_statments =[
  {
    heading:'1. Policy Statement',
    text:[
      '1.1 Modern slavery is a crime and a violation of fundamental human rights. It takes various forms, such as slavery, servitude, forced and compulsory labour and human trafficking, all of which have in common the deprivation of a person’s liberty by another to exploit them for personal or commercial gain. We have a zero-tolerance approach to modern slavery, and we are committed to acting ethically and with integrity in all our business dealings and relationships and to implementing and enforcing effective systems and controls to ensure modern slavery is not taking place anywhere in our own business or any of our supply chains.',
      '1.2 We are also committed to ensuring there is transparency in our own business and in our approach to tackling modern slavery throughout our supply chains, consistent with our disclosure obligations under the Modern Slavery Act 2015. We expect the same high standards from all of our contractors, suppliers and other business partners, and as part of our contracting processes, we include specific prohibitions against the use of forced, compulsory or trafficked labour, or anyone held in slavery or servitude, whether adults or children, and we expect that our suppliers will hold their suppliers to the same high standards.',
      '1.3 This policy applies to all persons working for us or on our behalf in any capacity, including employees at all levels, directors, officers, agency workers, seconded workers, volunteers, interns, agents, contractors, external consultants, third-party representatives and business partners.',
      '1.4 This policy does not form part of any employee’s contract of employment, and we may amend it at any time.',
      '1.5 This policy sets out the steps taken by London Construction Contractor Ltd during the financial year ending May 31st, 2023, to prevent modern slavery and human trafficking in its business and supply chain.'
    ]
  },
  {
    heading:'2. Responsibility for this policy',
    text:[
      '2.1 The board of directors has overall responsibility for ensuring this policy complies with our legal and ethical obligations, and that all those under our control comply with it.',
      '2.2 The Sustainability and Compliance Manager has primary and day-to-day responsibility for implementing this policy, monitoring its use and effectiveness, dealing with any queries about it, and auditing internal control systems and procedures to ensure they are effective in countering modern slavery.',
      '2.3 Management at all levels is responsible for ensuring those reporting to them understand and comply with this policy and are given adequate and regular training on it and the issue of modern slavery in supply chains.',
      '2.4 You are invited to comment on this policy and suggest ways in which it might be improved. Comments, suggestions and queries are encouraged and should be addressed to the Sustainability and Compliance Manager.',
    ]
  },
  {
    heading:'3. Compliance with the policy',
    text:[
      '3.1 You must ensure that you read, understand, and comply with this policy.',
      '3.2 The prevention, detection and reporting of modern slavery in any part of our business or supply chains is the responsibility of all those working for us or under our control. You are required to avoid any activity that might lead to, or suggest, a breach of this policy.',
      '3.3 You must notify your manager as soon as possible if you believe or suspect that a conflict with this policy has occurred, or may occur in the future. You may also follow the Whistleblowing Procedure as outlined in the Staff Handbook.',
      '3.4 You are encouraged to raise concerns about any issue or suspicion of modern slavery in any parts of our business or supply chains of any supplier tier at the earliest possible stage.',
      '3.5 If you believe or suspect a breach of this policy has occurred or that it may occur you must notify your line manager and/or report it in accordance with our Whistleblowing Policy (outline in the Staff Handbook) as soon as possible. You should note that where appropriate, and with the welfare and safety of local workers as a priority, we may give support and guidance to our suppliers to help them address coercive or exploitative work practices in their businesses and supply chains.',
      '3.6 If you are unsure about whether a particular act, the treatment of workers more generally, or their working conditions within any tier of our supply chains constitutes any of the various forms of modern slavery, raise it with your manager.',
      '3.7 We aim to encourage openness and will support anyone who raises genuine concerns in good faith under this policy, even if they turn out to be mistaken. We are committed to ensuring no one suffers any detrimental treatment as a result of reporting in good faith their suspicion that modern slavery of whatever form is or may be taking place in any part of our own business or any of our supply chains. Detrimental treatment includes dismissal, disciplinary action, threats or other unfavourable treatment connected with raising a concern. If you believe that you have suffered any such treatment, you should inform the compliance manager immediately. If the matter is not remedied, and you are an employee, you should raise it formally using our Grievance Procedure, which can be found in the Staff Handbook.',

    ]
  },
  {
    heading:'4. Communication and awareness of the policy',
    text:[
      '4.1 Training on this policy, and on the risk our business faces from modern slavery in its supply chains, forms part of the induction process for all individuals who work for us, and regular training will be provided as necessary.',
      '4.2 Our commitment to addressing the issue of modern slavery in our business and supply chains must be communicated to all suppliers, contractors and business partners at the outset of our business relationship with them and reinforced as appropriate thereafter.',
    ]
  },
  {
    heading:'5. Breaches of the policy',
    text:[
      '5.1 Any employee who breaches this policy will face disciplinary action, which could result in dismissal for misconduct or gross misconduct.',
      '5.2 We may terminate our relationship with other individuals and organisations working on our behalf if they breach this policy.'
    ]
  }
]

const ModernSlaveryStatement = (props: Props) => {
  return (
    <div className={style.slavery_container}>
      <h1>Modern Slavery Statement</h1>
      {policy_statments.map((item,index)=>{
        return (
          <div key={'statement_'+index}>
            <h5>{item.heading}</h5>
            {item.text.map((val,ind)=>{
              return (
                <p key={'text_'+ind}>{val}</p>
              )
            })}
          </div>
        )
      })}
      
      </div>
  )
}

export default ModernSlaveryStatement