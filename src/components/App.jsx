import React from "react";
import PropTypes, { arrayOf } from "prop-types";
// import Profile component and data
import user from "components/Profile/user.json";
import {Profile} from "./Profile/Profile";
// import stats component and data
import {Statistics} from "components/Statistics/Statistics";
import statData from "components/Statistics/data.json";
// import FriendList component and data
import { FriendList } from "./FriendList/FriendList";
import friends from "components/FriendList/friends.json";
// import TransactionHistory component and data
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "components/TransactionHistory/transactions.json";

const statTitle = 'Upload stats';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        data={statData}
        title={statTitle}
      />

      <FriendList
        data={friends}
      />

      <TransactionHistory
        data={transactions}
      />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}

Statistics.propTypes = {
  data: arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string
}
FriendList.propTypes = {
  data: arrayOf(PropTypes.object).isRequired,
}
TransactionHistory.propTypes = {
  data: arrayOf(PropTypes.object).isRequired,
}