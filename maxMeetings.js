class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(start, end) {
        // code here
        let meetings = []
        
        for(let i = 0; i < start.length; i++) {
            meetings.push({start: start[i], end: end[i], duration: end[i] - start[i]})
        }
        
        meetings.sort((a,b)=> a.end - b.end)
        
        let count = 1;
        
        let currEndTime = meetings[0].end;
        
        for(let i= 1; i<start.length; i++) {
            if(meetings[i].start>currEndTime) {
                count++;
                currEndTime = meetings[i].end
            }
        }
        
        return count;
    }
}
