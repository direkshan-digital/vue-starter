import { mount, createLocalVue } from '@vue/test-utils';
import VueAccordion from './VueAccordion.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueAccordion.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueAccordion, { localVue, mocks: { $style } });

    expect(wrapper.find('h1').text()).toBe('VueAccordion');
  });

});
