import axios from '@/plugins/axios'

class ExerciseDataServices {
  getAll(): Promise<any> {
    return axios.get('/exercises')
  }
}

export default new ExerciseDataServices()
