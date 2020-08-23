import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {

    //Abdel Note :  In a route's model() method, you return whatever data you want to make available to the template. I
    model() {
        return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
      }
}
