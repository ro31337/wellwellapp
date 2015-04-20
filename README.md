WellWellApp
===========

WellWellApp is dead simple project we use for feedback at the end of our sprints. The screen is devided into 4 parts:

1. What went well
2. What didn't go well
3. Thank you
4. Ways of improvement

The board is created with a single click and link is shared between team members. Everyone is able to leave a feedback in one or more cards for the each cell.

All changes are automatically saved. The board is updated on the fly, you'll be able to see when others are typing. You can delete empty cards with "Del" or "Backspace" button if it's not the last card in the cell.

System Dependencies
-------------------

- Meteor 1.1 (install with [meteor](http://www.meteor.com))

Getting Started
---------------

Run meteor in project directory:

    % meteor

After setting up, you can browse the application at:

    % http://localhost:3000

Deploy your application to meteor.com:

    % meteor deploy http://your_app_name.meteor.com


Guidelines
----------
- Pull requests are welcome! If you aren't able to contribute code please open an issue on Github.
- Write tests! (at the moment project has no tests)
- All code and commit messages should be in English
- Commit messages are written in the imperative with a short, descriptive title. Good => `Return a 204 when updating a question`, bad => `Changed http response` or `I updated the http response on the update action in the QuestionController because we're not showing any data there`. The first line should always be 50 characters or less and that it should be followed by a blank line.

License
-------
WellWellApp is distributed under the MIT license.
