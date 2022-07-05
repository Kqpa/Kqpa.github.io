$("body").terminal
(
  {
    whoami: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " About Me\n" +
          " ————————\n" +
          " ]\n" +
          " Hi, I'm Kqpa. An avid technology enthusiast and a software developer.\n" +
          " I'm currently knowledgeable in Python, C/C++, *NIX Operating Systems \n" +
          " and varios other technologies. I love exploring new technologies and\n" +
          " tinkering with hardware and software. Other than technology, I've been\n" +
          " playing tennis since I was 5 years old and I've been recieving music\n" +
          " education since the age of 3. I've participated in multiple piano \n" +
          " competitions in the past and gave multiple concerts. This is just a\n" +
          " brief introduction to me, if wish to talk to me or know more about me\n" +
          " you're more than welcome to contact me.\n"
      );
    },

    socials: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " Socials\n" +
          " ————————\n" +
          " ]\n" +
          " GitHub   |   http://github.com/Kqpa \n" +
          " Twitter  |   https://twitter.com/epicmanborax \n" +
          " Reddit   |   https://reddit.com/u/Kqpa \n" +
          " Steam    |   https://steamcommunity.com/id/kqpa_ \n"
      );
    },

    contact: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " Contact\n" +
          " ————————\n" +
          " ]\n" +
          " Mail     |   kqpa@pm.me\n" +
          " Discord  |   Kqpa#0001 [ID: 419181431512891413]\n"
      );
    },

    help: function()
    {
      this.echo
      (
          " [[b;white;]\n" +
          " Help\n" +
          " ————————\n" +
          " ]\n" +
          " $ whoami   |  A brief summary about me. \n" +
          " $ socials  |  Platforms that you can find me on. \n" +
          " $ contact  |  Ways to contact me. \n" +
          " $ clear    |  Clears the terminal. \n"
      );
    },
  },
  
  {
    greetings:  "Welcome to my personal website, run 'help' for a list of commands.\n",
    prompt:     "[guest[[b;grey;]@]kqpa.me]$ ",
  }
);
