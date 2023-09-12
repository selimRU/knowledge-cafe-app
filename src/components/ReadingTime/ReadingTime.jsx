

const ReadingTime = ({  totalTime }) => {
    console.log(totalTime);
    let total = 0;
    for (const time of totalTime) {
        total += time
    }
    return (
        <div>
          <p>Spent time on read : {total}</p>  
        </div>
    );
};

export default ReadingTime;