// provide a single place to import all question types as the default
// export file for '[...]/question'
// this is pretty much only useful for the router configuration

// import all lesson types
import tradQuestion    from './trad.question.vue'
import exampleQuestion from './example.question.vue'

// map json response lesson type names to correct lesson component type
// prop names MUST match up with json reponses
export default {
  trad:     tradQuestion,
  example:  exampleQuestion,
  /* ... add more question types here... for a REAL EXAMPLE see this file on the EE site */
}
