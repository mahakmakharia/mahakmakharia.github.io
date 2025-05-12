const q$ = {
  elem: null,
  select(selector, element) {
    const mountElem = element || document;
    if (selector) this.elem = mountElem.querySelector(selector);
    return this;
  },
  selectAll(selector, element) {
    const mountElem = element || document;
    if (selector) this.elem = mountElem.querySelectorAll(selector);
    return this;
  },
  selectById(selector, element) {
    const mountElem = element || document;
    if (selector) this.elem = mountElem.getElementById(selector);
    return this;
  },
  modifyInnerHTML(content) {
    if (this.elem) {
      this.elem.innerHTML = content;
    }
    return this;
  },
  modifyInnerHTMLAll(content) {
    this.elem?.forEach((item) => {
      if (item) {
        item.innerHTML = content;
      }
    });
    return this;
  },
  addClass(...className) {
    this.elem?.classList?.add(...className);
    return this;
  },
  addClassAll(...className) {
    this.elem?.forEach((item) => item?.classList?.add(...className));
    return this;
  },
  removeClass(className) {
    this.elem?.classList?.remove(className);
    return this;
  },
  removeClassAll(className) {
    this.elem?.forEach((item) => item?.classList?.remove(className));
    return this;
  },
  modifyTextContent(content) {
    if (content && this.elem) {
      this.elem.textContent = content;
    }
    return this;
  },
  modifyTextContentAll(content) {
    if (content) {
      this.elem?.forEach((item) => {
        if (item) {
          item.textContent = content;
        }
      });
    }
    return this;
  },
  setAttribute(attrKey, attrVal) {
    if (attrKey && attrVal) {
      this.elem?.setAttribute(attrKey, attrVal);
    }
    return this;
  },
  setAttributeAll(attrKey, attrVal) {
    if (attrKey && attrVal) {
      this.elem?.forEach((item) => {
        item?.setAttribute(attrKey, attrVal);
      });
    }
    return this;
  },
  setStyleProperty(attrKey, attrVal, optional) {
    if (attrKey && attrVal) {
      this.elem?.style?.setProperty(attrKey, attrVal, optional);
    }
    return this;
  },
  setStylePropertyAll(attrKey, attrVal, optional) {
    if (attrKey && attrVal) {
      this.elem?.forEach((item) => {
        item?.style?.setProperty(attrKey, attrVal, optional);
      });
    }
    return this;
  },
  removeAttribute(attribute) {
    if (this?.elem && attribute) {
      this?.elem.removeAttribute(attribute);
    }
    return this;
  },
  removeAttributeAll(attribute) {
    if (attribute) {
      this.elem?.forEach((item) => {
        item?.removeAttribute(attribute);
      });
    }
    return this;
  },
  setDataAttribute(attrKey, attrVal) {
    if (attrKey && attrVal) {
      if (this.elem) {
        this.elem.dataset[attrKey] = attrVal;
      }
    }
    return this;
  },
  setDataAttributeAll(attrKey, attrVal) {
    if (attrKey && attrVal) {
      this.elem?.forEach((item) => {
        if (item) {
          item.dataset[attrKey] = attrVal;
        }
      });
    }
    return this;
  },
  getTemplateContent() {
    if (this.elem) {
      this.elem = document.importNode(this.elem.content, true);
    }
    return this;
  },
};

const workItems = [
  {
    company: 'pixxel.space',
    logo: 'assets/images/pixxel.png',
    time: 'Oct 2024 - Present',
    desc: "Building the world's most advanced earth observation platform using Hyperspectral Images and Artificial Intelligence.",
    mainImg: 'assets/images/pixxel-2.webp',
    sideImg: 'assets/images/pixxel-1.webp',
    modalContent: '',
  },
  {
    company: 'getsimpl.com',
    logo: 'assets/images/simpl.png',
    time: 'Nov 2023 - Oct 2024',
    desc: "Built the transaction platform for one of India's leading BNPL platforms, enabling customers to make purchases and pay later with ease.",
    mainImg: 'assets/images/simpl-2.webp',
    sideImg: 'assets/images/simpl-1.webp',
    modalContent: '',
  },
  {
    company: 'mydukaan.io',
    logo: 'assets/images/dukaan.png',
    time: 'Nov 2021 - Nov 2023',
    desc: 'Built the theme engine for dukaan, enabling users to create and customize their e-commerce stores with ease.',
    mainImg: 'assets/images/dukaan-2.webp',
    sideImg: 'assets/images/dukaan-1.webp',
    modalContent: '',
  },
];

const feedbacks = [
  {
    name: 'Harikrishnan',
    position: 'Senior Product Manager, Simpl',
    img: 'assets/images/hari.webp',
    review:
      'Mahak worked with me on numerous key initiatives at Simpl. She is highly collaborative and has a deep understanding of user experience which is a great skillset to have as a developer. In addition, Mahak can come up with innovative solutions while showcasing a good hold over tech while also understanding business goals. Mahak would be a great addition to any team!',
  },
  {
    name: 'Dawar Mir',
    position: 'Head of Product Design, Dukaan',
    img: 'assets/images/dawar.webp',
    review:
      "Working closely with Mahak, I've been continually impressed by her ingenious solutions and her unwavering commitment to pixel-perfect designs. Her smart approach to problem-solving sets her apart, making her an invaluable asset to any team. I highly recommend her!",
  },
  {
    name: 'Atul Dubey',
    position: 'VP of Engineering, Dukaan',
    img: 'assets/images/atul.webp',
    review:
      "Mahak is one of the most talented and hand-working engineers that I've worked with - always keen to learn and grow more.",
  },
  {
    name: 'Raveesh Agarwal',
    position: 'Director of Engineering - Mobile, Highlevel',
    img: 'assets/images/raveesh.webp',
    review:
      "Mahak is a well organized diligent learner, who's good at designing and developing web applications. She's a highly dedicated person who tries her best to deliver quality work on time. On top of being a great developer, she's also an easy going person which makes it easier to work with her. I wish her luck for all her future endeavors. I am sure she will always succeed.",
  },
  {
    name: 'Ankur Warikoo',
    position: 'Entrepreneur, Investor, Mentor',
    img: 'assets/images/ankur.webp',
    review:
      "Mahak is one of the most diligent resources we've had on the team. Her original role was that of a designer, she was more of a software engineer. A proud moment was when she solved a persistent problem on our YouTube channel. She created an automated process for identification and deletion of spams. While leading all visual branding for Instagram, and playing a huge role in the platform's growth from 76k to 1.4 Million followers in a year. It is surprising at times for me to realize that she did this at the age of 21 years!!",
  },
  {
    name: 'Rimjhim Bhadani',
    position: 'Software Engineer, Google',
    img: 'assets/images/rimjhim.webp',
    review:
      "I have known Mahak for more than a year now and have always been surprised and impressed by her hardwork and creativity. Her work management skills are far beyond appreciation. She flawlessly blends into multiple roles. She was one of the most contributing core members for DSC IEM, always ready to work on new ideas and whatever else is assigned to her. She singlehandedly managed the design requirements of the club and always completed the work with perfection. Mahak's welcoming nature always makes it pleasant to work with her. I wish her good luck for all her future endeavours.",
  },
];

const renderWorkItems = () => {
  const workItemsContainer = q$.select('.work-items-container').elem;

  workItems.forEach((item) => {
    const template = q$.selectById('work-item').getTemplateContent().elem;
    q$.select('img', template).setAttribute('src', item.logo);
    q$.select('.name', template).modifyTextContent(item.company);
    q$.select('a', template).setAttribute('href', `https://${item.company}`);
    q$.select('.time', template).modifyTextContent(`(${item.time})`);
    q$.select('.desc', template).modifyTextContent(item.desc);
    q$.select('.main-img', template).setAttribute('src', item.mainImg);
    q$.select('.side-img', template).setAttribute('src', item.sideImg);
    workItemsContainer.appendChild(template);
  });
};

const renderFeedbacks = () => {
  const feedbackContainer = q$.select('.feedback-container').elem;

  feedbacks.forEach((item) => {
    const template = q$.selectById('feedback-item').getTemplateContent().elem;
    q$.select('img', template).setAttribute('src', item.img);
    q$.select('.name', template).modifyTextContent(item.name);
    q$.select('.position', template).modifyTextContent(item.position);
    q$.select('.desc', template).modifyTextContent(item.review);
    feedbackContainer.appendChild(template);
  });
};

const sections = q$.selectAll('section').elem;
const navLinks = q$.selectAll('.nav li').elem;

function handleScroll() {
  let scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      console.log('here', id, q$.select(`.nav li a[href="#${id}"]`).elem);
      q$.select(`.nav-${id}`).addClass('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
  renderWorkItems();
  renderFeedbacks();
  handleScroll();
});
