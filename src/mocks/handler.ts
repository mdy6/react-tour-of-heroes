import { rest } from 'msw'
import { HEROES } from './mock-heroes'
import { Hero, defaultHero } from '../models/Hero'


export const handlers =[
rest.get('/heroes', (req, res, ctx) => {

    return res(
        ctx.status(200),
        ctx.json(JSON.stringify(HEROES))
    )
}),

rest.get('/heroes/:heroId', (req, res, ctx) =>{
    const {heroId } = req.params

    var hero: Hero = defaultHero; 
    if(heroId){
        hero = HEROES.find((h) => h.id.toString() === heroId) ?? defaultHero
    }

    if (hero.id > 0) {
        return res(
            ctx.status(200),
            ctx.body(JSON.stringify(hero))
        )
    }
    return res(
        ctx.status(404)
    )

})

]