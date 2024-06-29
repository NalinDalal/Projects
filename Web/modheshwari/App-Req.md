# Name of React App- Population Data

## Name of Community- Shri Sakalpanch Gujarati Modhvanik Samaj Trust, Burhanpur

## Website for Community

Make a Next.js MonoRepo App

Have some admins
1st level - Trust Head,"adhyaksh"
2nd level - gotra ke president
3rd level - secretary
4th level - normal members

Information to be Rendered Specifically:

1.  gotra ke makan-total families in each gotra
    each makan/family having own entry
    head of family,
    their family member,
    their corresponding personal basic details,
    family member qualifications -their highest or most recent individual educational qualifications
    personal id of each family member- allow this id through hash tables or hashing
    personal id and family id should be rendered synaptically, like family has id say 101(rendered by some specific) ,then the family member have id like 101F[Name_initial]

        use case1:
            families,individual member gets rendered as per city location also like 3 families in the bhopal or indore maybe

        use case2:
            aadhar no is hidden no, id no is not there, like just dump the whole family details, like only details

2.  Individual Member use case:
    member entry id [rendered in above use case],
    User Authentication,
    in case forgot about own,then id recovery

    use case1 :
    in case of marriage,the girl's father name changes,hence permission to edit the house name and other relevant details like gotra
    the data from the father side family gets deleted and it just gets rendered into husband side family
    member transfer in some other family due to marriage ,gets rendered into the other family
    say now the girl get married, send request from the girl or girl's father to the admin be it 1st,2nd or 3rd level to move the specific person

    use case2:
    the person is no more in this world,his/her data gets deleted thru admin, gets rendered into list of deceased memebers
    hence his/her id doesn't gets rendered to any other person

    use case3:
    all blood relation gets rendered from both side,like X is son/daughter of Y, also renders Y is Father/Mother of X

    use case4:
    user profile photo updation

    use case5:
    aadhar no is hidden no, id no is not there, like just dump the whole family details, like only details

    use case6:
    in case person dies,no one else should be rendered his/her id no

3.  Events upcoming in the community can be rendered through the head of community like back in november just after diwali when we had Garba Celebration for 4 days,hence can apply for the passes through here itself along with online payment. hence render the passes on the app itself with unique id and which can be downloaded.

4.  Render the Hindu calendar on the App
