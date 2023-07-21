import React from 'react'
import './faqs.scss'

const FAQs = () => {
  return (
    <div className='faqsContainer'>
      <div className='faqsTitle'>
        <h1>FREQUENTLY ASKED QUESTION</h1>
      </div>
     <div className='faqsContent'>
      <ul>
        <li>
            <select>
                <option selected>What does the BuildLab Tech Experience program entail?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected>Will participants receive a certificate of participation?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected> How much does the program cost?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected>What is the duration of the bootcamp</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected>Can I pay for two certificates?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected>Can I pay for two certificates?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected>Does a single payment cover two certificates?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected> Is installment payment available?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>

        <li>
            <select>
                <option selected> : What are the benefits of the program</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default FAQs
