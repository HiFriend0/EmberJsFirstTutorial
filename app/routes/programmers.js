import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {

    model() {
        return ['Mark zuckerberg', 'Larry page', 'Abdellah bentaleb'];
      }
}
