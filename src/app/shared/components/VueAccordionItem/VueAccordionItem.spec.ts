import { mount, createLocalVue } from '@vue/test-utils';
import VueAccordionItem from './VueAccordionItem.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueAccordionItem.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueAccordionItem, { localVue, mocks: { $style } });
  });

});
