import React from 'react'
import style from './projects.module.scss'

const projects = [
  {name:'Project A', detail:'New Built 10 Flats in Bromley '},
  {name:'Project B', detail:'Rear and Side Extension, with loft conversion to divide a in 4 Flats in New Malden'},
  {name:'Project C', detail:'Storey Raer Extension above Commercial in Guildford'},

]
type Props = {}

const Projects = (props: Props) => {
  return (
    <div className={style.project_container}>
      <p className={style.heading}>Projects</p>
      <p className={style.feature_heading}>Featured Projects</p>
      <p>Here are some of our standout projects.</p>
      <div>
        {projects.map((item,index)=>{
          return  (
            <div key={'project_'+index}>
            <p className={style.project_name}>{item.name}</p>
            <p className={style.project_detail}>{item.detail}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects