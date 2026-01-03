import _ from 'lodash'

export default () => {
  console.log('Hello, Hexlet!')
  const result = _.last(['one', 'two'])
  console.log(result)
  return result
}
