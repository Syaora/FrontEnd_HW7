import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Marie Cure', 'Mae Jemison', 'Albert Hofmann'];
  }
});
